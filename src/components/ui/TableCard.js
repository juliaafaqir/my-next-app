import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import FirstTableData from '@/FIRST_TABLE_DATA.json'
import styles from "@/styles/components/TableCard.module.css";

function TableCard(props) {
   const data = useMemo(() => FirstTableData, []);
   const columns = useMemo(()=> [
    {
    Header: "Keyword",
    accessor: "keyword"
    },
   {
    Header: "# Searches",
    accessor: "searches"
   },
   {
    Header: "Country",
    accessor: "country"
   },
   {
    Header: "#Assets",
    accessor: "assets"
   }
],[]);

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  return (
    <div className={styles.card}>
        <div>
            <h5>{props.title}</h5>
            <button>{props.filter}</button>
        </div>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                    </tr>
                );
                })}
            </tbody>
        </table>
    </div>
  );
}

export default TableCard
