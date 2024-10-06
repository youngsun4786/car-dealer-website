"use client";

import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { useState } from "react";

import { title } from "@/components/primitives";

const cars = [
  {
    id: 1,
    name: "2019 Toyota Camry",
    price: 22000,
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "2018 Honda Accord",
    price: 20000,
    image:
      "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "2020 Ford Mustang",
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
    <div className="container mx-auto px-4 py-8">
      <h1 className={title()}>Inventory</h1>
      <Input
        className="mb-8"
        placeholder="Search cars..."
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <Card key={car.id}>
            <CardHeader>
              <h4 className="text-xl font-bold">{car.name}</h4>
              <p className="text-sm text-gray-500">${car.price}</p>
            </CardHeader>
            <CardBody>
              <Image
                alt={car.name}
                className="w-full h-48 object-cover rounded-md"
                height={200}
                priority={true}
                src={car.image}
                width={300}
              />
            </CardBody>
            <CardFooter>
              <Button color="primary">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InventoryPage;
