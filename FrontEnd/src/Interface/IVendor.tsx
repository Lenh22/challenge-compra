import React from "react";

export interface IVendor {
  codigo: number;
  descripcion: string;
  onSelect?: (codigo: number, isChecked: boolean) => void;
  children?: React.ReactNode;
  className?: string;
}

export interface IVendorList {
  onSelectVendor: any;
}
