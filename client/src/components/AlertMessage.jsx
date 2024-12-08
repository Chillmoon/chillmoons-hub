import React from "react";
import { Alert } from "flowbite-react";

export default function AlertMessage({ message, type }) {
  if (!message) return null;

  return <Alert color={type}>{message}</Alert>;
}
