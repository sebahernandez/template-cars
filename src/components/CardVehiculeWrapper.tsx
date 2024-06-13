import React from "react";

interface CardVehiculeProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  brand: string;
  fuelType: string;
  miles: number;
  transmission: string;
  available: boolean;
}

const CardVehiculeWrap: React.FC<CardVehiculeProps> = ({
  id,
  name,
  imageUrl,
  price,
  brand,
  fuelType,
  miles,
  transmission,
  available,
}) => {
  const placeholder = "/images/noimage.jpg";
  console.log("imagen de placeholder", placeholder);
  const carNameSlug = name.replace(/ /g, "-").toLowerCase();
  return (
    <div className="mx-auto">
      <div className="max-w-sm cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
        <div className="h-[300px] w-full overflow-hidden rounded-t-lg">
          <a href={`/car/${carNameSlug}/${id}`}>
            <img
              className="h-full w-full object-cover"
              src={imageUrl ? imageUrl : placeholder}
              alt={name}
            />
          </a>
        </div>
        <p className="bg-slate-900 px-4 py-0.5 text-lg font-semibold text-white">
          ${price.toLocaleString("es-CL")}
        </p>
        <div>
          <div className="my-6 flex items-center justify-between px-4 h-10">
            <a
              href={`/car/${id}`}
              className="font-bold text-slate-900 text-[16px]"
            >
              {name}
            </a>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Disponible</p>
            {available ? (
              <p className="rounded-full bg-green-200 px-2 py-0.5 text-xs font-semibold text-green-600">
                Sí
              </p>
            ) : (
              <p className="rounded-full bg-red-200 px-2 py-0.5 text-xs font-semibold text-red-600">
                No
              </p>
            )}
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Marca</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {brand}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">
              Tipo Combustible
            </p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {fuelType}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">KM</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {miles}
            </p>
          </div>
          <div className="my-4 flex items-center justify-between px-4">
            <p className="text-sm font-semibold text-gray-500">Transmisión</p>
            <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
              {transmission}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVehiculeWrap;
