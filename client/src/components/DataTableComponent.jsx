import React from "react";
import { Table, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function DataTableComponent({ title, data, columns, tabLink }) {
  return (
    <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md dark:bg-gray-800">
      <div className="flex justify-between p-3 text-sm font-semibold">
        <h1 className="text-center p-2">{title}</h1>
        <Button outline gradientDuoTone="greenToBlue">
          <Link to={tabLink}>See all</Link>
        </Button>
      </div>
      <Table hoverable>
        <Table.Head>
          {columns.map((col, idx) => (
            <Table.HeadCell key={idx}>{col}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((row, idx) => (
            <Table.Row
              key={idx}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              {Object.values(row).map((cell, cellIdx) => (
                <Table.Cell key={cellIdx}>{cell}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
