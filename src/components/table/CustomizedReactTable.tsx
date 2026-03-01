"use client";
import { flexRender, type Row } from "@tanstack/react-table";
import { Fragment } from "react";
import { useTableContext } from "./TableProvider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { cn } from "@/lib/utils";

interface ICustomizedReactTableProps<T extends any> {
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  getRowClassName?: (row: Row<T>) => string;
  headerRowClassName?: string;
  headerClassName?: string;
}

function CustomizedReactTable<T extends any>({
  renderSubComponent,
  getRowClassName,
  headerRowClassName,
  headerClassName,
}: ICustomizedReactTableProps<T>) {
  const { table, columns } = useTableContext<T>();
  const tableRows = table?.getRowModel()?.rows;

  return (
    <Table>
      <TableHeader
        className={cn(
          "[&_tr]:!border-t-0",
          headerClassName,
        )}
      >
        {table?.getHeaderGroups()?.map((headerGroup) => (
          <TableRow key={headerGroup?.id} className={headerRowClassName}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header?.id}
                colSpan={header?.colSpan}
                style={{ minWidth: header.getSize() }}
                className="first:ps-6 last:pe-6"
              >
                {header?.isPlaceholder ? null : (
                  <div
                    className={
                      header?.column?.getCanSort()
                        ? "cursor-pointer select-none"
                        : ""
                    }
                    onClick={header?.column?.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </div>
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody className="last:[&_tr]:border-b-0">
        {tableRows?.length ? (
          tableRows?.map((row) => (
            <Fragment key={row?.id}>
              <TableRow
                data-state={row?.getIsSelected() && "selected"}
                className={cn(getRowClassName?.(row))}
              >
                {row?.getVisibleCells()?.map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{ minWidth: cell.column.getSize() }}
                    className="first:ps-6 last:pe-6 py-4"
                  >
                    {flexRender(
                      cell?.column?.columnDef?.cell,
                      cell?.getContext(),
                    )}
                  </TableCell>
                ))}
              </TableRow>
              {/* Expanded Content */}
              {row.getIsExpanded() && (
                <TableRow>
                  <TableCell
                    colSpan={row.getVisibleCells().length}
                    className="first:ps-6 last:pe-6"
                  >
                    {renderSubComponent?.({ row })}
                  </TableCell>
                </TableRow>
              )}
            </Fragment>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns?.length}
              className="h-24 w-full text-center"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default CustomizedReactTable;
