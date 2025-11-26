import AppCard from "@/components/app-card"
import { title } from "process";
import { LuTestTubeDiagonal } from "react-icons/lu";

export function Projects () {
    return (
        <div>
            <AppCard IconComponent={<LuTestTubeDiagonal />} title="test title" desc="test desc" url="sample url" />
        </div>
    )
}

export default Projects