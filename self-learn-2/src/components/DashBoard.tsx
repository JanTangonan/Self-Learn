import { Grid, GridItem } from "@chakra-ui/react";
import '../styles/DashBoard.css'


export default function DashBoard() {
    return (
        <>  
            <div className="margin"></div>
            <Grid
                h="1200px"
                templateRows="repeat(12, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
            >
                <GridItem rowSpan={12} colSpan={1} bg="tomato" />

                <GridItem rowSpan={3} colSpan={2} bg="papayawhip" borderRadius={20}/>
                <GridItem rowSpan={3} colSpan={2} bg="papayawhip" borderRadius={20}/>
                <GridItem rowSpan={3} colSpan={2} bg="tomato" borderRadius={20}/>
                <GridItem rowSpan={3} colSpan={2} bg="tomato" borderRadius={20}/>
            </Grid>
        </>
        
    );
    }