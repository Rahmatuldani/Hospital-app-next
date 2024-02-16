import React from "react";

function AdminLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            Admin Layout
            {children}
        </div>
    );
}

export default AdminLayout;