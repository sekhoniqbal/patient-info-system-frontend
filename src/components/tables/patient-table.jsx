import { useMemo } from "react"
import { Link } from "wouter";
import DeleteButton from "../layout/delete-button";
import { MaterialReactTable } from "material-react-table";
import useAuthentication from "../../hooks/useAuthentication";
import roles from "../../others/roles";
let compactOptions = {
    initialState: { density: 'compact' },
    enablePagination: false,
    enableTopToolbar: false,
    enableBottomToolbar: false,
    enableColumnActions: false,
}
export default function PatientTable({ data, details, edit, compact, onDelete, ...options }) {
    const {authInfo} = useAuthentication();
    const isAdmin = authInfo?.role ===roles.ADMIN;
    options = compact ? {...options, ...compactOptions}:options;
    const columns = useMemo(() =>
        [
            {
                accessorKey: 'id',
                header: 'Id',
                size: 150,
            }, {
                accessorKey: 'firstName',
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'dateOfBirth',
                header: 'Date Of Birth',
                size: 150,
            },
             {
                accessorFn: (row) => ``,
                header: 'Settings',
                size: 150,
                Cell: ({ row, renderedCellValue }) => (
                    <span key={row.original.id}>
                        {details && <Link href={`/patients/${row.original.id}/details`}><i title="Details" className="ri-edit-box-line more"></i></Link>}
                        {edit && <Link href={`/patients/${row.original.id}/edit`}><i title="Edit" className="ri-edit-line edit"></i></Link>}
                        { isAdmin && onDelete && <DeleteButton onDelete={() => onDelete(row.original.id)} />}
                    </span>
                )
            }
        ],[onDelete,details,edit]);
    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            {...options}
        />
    )
}