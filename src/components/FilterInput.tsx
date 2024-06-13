import React, { useState, useEffect } from "react";

interface FilterInputProps {
  onFilterChange: (filter: string, sort: string, brand: string) => void;
  brands: string[];
}

const FilterInput: React.FC<FilterInputProps> = ({
  onFilterChange,
  brands,
}) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");

  useEffect(() => {
    onFilterChange(filter, sort, brand);
  }, [filter, sort, brand, onFilterChange]);

  return (
    <div className="container mx-auto flex flex-col items-center mb-8 w-full p-4 md:p-0">
      <div className="flex flex-col justify-end items-center md:justify-end md:items-center md:flex-row w-full mb-4 ">
        <input
          type="text"
          placeholder="Buscar vehículos..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2  rounded-sm  text-blac mb-2  md:mb-0"
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="p-2 rounded-sm border-2  text-black m-1 w-full md:w-[200px]"
        >
          <option value="">Ordenar por precio</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="p-2 rounded-sm border-2  text-black m-1 w-full md:w-[200px]"
        >
          <option value="">Seleccionar marca</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterInput;
