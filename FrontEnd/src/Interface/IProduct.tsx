import React from "react";

export interface IProduct {
  codigo: string;
  descripcion: string;
  precio: number;
  deposito: number;
  onSelect: (codigo: string, isChecked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export interface IProductList {
  onSelectProduct: any;
}
