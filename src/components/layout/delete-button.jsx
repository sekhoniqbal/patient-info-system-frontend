import { useState } from "react"

export default function DeleteButton({ onDelete }) {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    return (
        <div className="d-inline-block">
            <i title="Delete" className="ri-delete-bin-line delete" onClick={() => setShowConfirmDialog(true)}>
            </i >
            {showConfirmDialog && (
                <div className=" w-200 h-100 d-flex justify-content-center align-items-center"
                style={{left:0,top:0, }}
                >
                    <div className="p-4 bg-white rounded p-relative" style={{
                        background: "black",
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
                    }}>

                        <div className="form-group">
                            {/* <input id="confirm-delete" className="mr-2" type="checkbox" /> */}
                            <label htmlFor="confirm-delete">Are you sure you want to delete this item? </label>
                        </div>
                        <button className="btn btn-secondary btn-sm mx-2" onClick={()=>setShowConfirmDialog(false)}>Cancel</button>
                        <button className="btn btn-danger btn-sm mx-2" onClick={onDelete}>Delete</button>
                    </div>

                </div>
            )}
        </div>

    )

}