import React, { useEffect, useState } from "react";
import { fetchAllVehicles } from "../services/automotive";
import CardVehiculeWrapper from "./CardVehiculeWrapper";
import Loading from "../components/Loading";
import FilterInput from "../components/FilterInput";

interface Vehicle {
  id: number;
  [key: string]: any;
}

interface PaginationLink {
  href: string;
  text: string;
}

interface CatalogoConFiltroProps {
  page: string;
}

const ITEMS_PER_PAGE = 8;
const VISIBLE_PAGES = 3;

const CatalogoConFiltro: React.FC<CatalogoConFiltroProps> = ({ page }) => {
  const [car, setCar] = useState<Vehicle[]>([]);
  console.log(car);
  const [currentVehicles, setCurrentVehicles] = useState<Vehicle[]>([]);
  const [paginationLinks, setPaginationLinks] = useState<PaginationLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const currentPage = parseInt(page || "1", 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const autos = await fetchAllVehicles();
        console.log("Fetched autos:", autos);
        setCar(autos.vehicles);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching vehicles:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (car.length > 0) {
      let filteredVehicles = car.filter((vehicle) => {
        const name = vehicle.name || "";
        const vehicleBrand = vehicle.brand || "";
        return (
          name.toLowerCase().includes(filter.toLowerCase()) &&
          (brand === "" || vehicleBrand.toLowerCase() === brand.toLowerCase())
        );
      });

      if (sort === "desc") {
        filteredVehicles.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/,/g, ""));
          const priceB = parseFloat(b.price.replace(/,/g, ""));
          return priceB - priceA; // Orden descendente
        });
      } else {
        filteredVehicles.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/,/g, ""));
          const priceB = parseFloat(b.price.replace(/,/g, ""));
          return priceA - priceB; // Orden ascendente
        });
      }

      const total = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
      setTotalPages(total);

      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;

      setCurrentVehicles(filteredVehicles.slice(startIndex, endIndex));

      const links = Array.from({ length: total }, (_, i) => ({
        href: `/catalogo/${i + 1}`,
        text: ` ${i + 1}`,
      }));
      setPaginationLinks(links);

      const startPage = Math.max(
        1,
        currentPage - Math.floor(VISIBLE_PAGES / 2)
      );
      const endPage = Math.min(total, startPage + VISIBLE_PAGES - 1);

      const adjustedStartPage = Math.max(
        1,
        Math.min(startPage, total - VISIBLE_PAGES + 1)
      );
      const adjustedEndPage = Math.min(
        total,
        adjustedStartPage + VISIBLE_PAGES - 1
      );

      setPaginationLinks(links.slice(adjustedStartPage - 1, adjustedEndPage));
    }
  }, [car, currentPage, filter, sort, brand]);

  if (isLoading) {
    return <Loading />;
  }

  const brands = Array.from(new Set(car.map((vehicle) => vehicle.brand)));

  return (
    <div className="w-full">
      <FilterInput
        onFilterChange={(filter, sort, brand) => {
          setFilter(filter);
          setSort(sort);
          setBrand(brand);
        }}
        brands={brands}
      />
      <main className="container mx-auto text-white">
        {currentVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentVehicles.map((auto) => (
              <CardVehiculeWrapper
                key={auto.id}
                id={auto.id.toString()}
                name={auto.name}
                imageUrl={auto.imageUrl}
                price={auto.price.replace(/,/g, ".")}
                brand={auto.brand}
                fuelType={auto.fuelType}
                miles={auto.miles}
                transmission={auto.transmission}
                available={auto.available}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-xl mt-10">
            No se encontraron vehículos.
          </p>
        )}

        <div className="flex justify-center mt-10">
          <nav className="flex space-x-2 my-5" aria-label="Pagination">
            {currentPage > 1 && (
              <a
                href={`/catalogo/${currentPage - 1}`}
                className="relative inline-flex items-center px-4 py-2 text-sm  cursor-pointer bg-slate-700 text-white"
              >
                Anterior
              </a>
            )}
            {paginationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-medium   cursor-pointer leading-5 rounded-sm transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue  ${
                  parseInt(link.text) === currentPage
                    ? " bg-slate-700 text-white"
                    : "bg-white text-gray-700 "
                }`}
              >
                {link.text}
              </a>
            ))}
            {currentPage < totalPages && (
              <a
                href={`/catalogo/${currentPage + 1}`}
                className="relative inline-flex items-center px-4 py-2 text-sm  cursor-pointer bg-slate-700 text-white"
              >
                Siguiente
              </a>
            )}
          </nav>
        </div>
      </main>
    </div>
  );
};

export default CatalogoConFiltro;
