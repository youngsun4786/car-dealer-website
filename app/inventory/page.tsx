"use client";

import Pagination from "@/components/pagination";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { useState } from "react";

const cars = [
  {
    id: 1,
    name: "2019 Toyota Camry",
    mileage: 4000,
    engine: "petrol",
    carType: "CVT",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "2018 Honda Accord",
    mileage: 4000,
    engine: "petrol",
    carType: "automatic",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "2020 Ford Mustang",
    mileage: 4000,
    engine: "diesel",
    carType: "manual",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 4,
    name: "2019 Toyota Camry",
    mileage: 4000,
    engine: "petrol",
    carType: "CVT",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 5,
    name: "2018 Honda Accord",
    mileage: 4000,
    engine: "petrol",
    carType: "automatic",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 6,
    name: "2020 Ford Mustang",
    mileage: 4000,
    engine: "diesel",
    carType: "manual",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
];

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-y-6">
      {/* <h1 className={title()}>Inventory</h1> */}
      <Input
        className="py-4"
        placeholder="Search cars..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 w-3/4 md:grid-cols-2 lg:w-full lg:grid-cols-4 gap-8">
        {filteredCars.map((car) => (
          <Card key={car.id}>
            <CardBody className="p-0">
              <Image
                alt={car.name}
                className="w-full h-48 object-cover rounded-md"
                height={200}
                priority={true}
                src={car.image}
                width={300}
              />
            </CardBody>
            <CardFooter className="flex flex-col items-start p-5">
              <h3 className="text-lg font-medium">{car.name}</h3>
              <div className="flex justify-between gap-x-2 pt-2 font-light">
                <p className=" text-xs">{car.mileage} Miles</p>
                <p className=" text-xs">{car.engine}</p>
                <p className=" text-xs">{car.carType}</p>
              </div>
              <div className="flex flex-col gap-y-2 pt-6">
                <p className="text-md font-bold text-xl">${car.price}</p>
                <Link
                  isExternal
                  className="text-sm relative after:bg-blue-500 after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  href="https://github.com/nextui-org/nextui"
                  showAnchorIcon={true}
                >
                  View Details
                </Link>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center py-8">
        <Pagination />
      </div>
    </div>
  );
};

export default InventoryPage;
