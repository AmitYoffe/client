'use client'
import DataTable from "@/components/DataGridComps/DataTable";
import { Director } from "@/models/director";
import { getDirectors } from "@/services/directorService";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DirectorsPage() {
    const [directors, setDirectors] = useState<Director[]>();
    const router = useRouter();
    console.log('Router:', router);
    const currentRouteName = router.pathname.includes("directors") ? "directors" : "movies";

    useEffect(() => {
        const fetchDirectors = async () => {
            const data = await getDirectors();
            setDirectors(data);
        };
        fetchDirectors();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            // width: '100%',
            padding: '5em',
        }}>
            {directors && <DataTable data={directors} currentRouteName={currentRouteName} />}
        </Box>
    );
};
