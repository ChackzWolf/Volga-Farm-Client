import { PlantsGrid } from "../../components/website/plants/PlantGrid";

export function PlantCollection(){
    return (
        <div className="flex">
            <div className="md:w-3/12">
                {/* Filter comes here IPPO ALLA PINNE */}
            </div>
            <div className="md:w-9/12">
            <PlantsGrid/>
            </div>
        </div>
    )
}