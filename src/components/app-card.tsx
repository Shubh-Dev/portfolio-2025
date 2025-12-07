import Image from "next/image";
import Link from "next/link";
import React from "react";


interface AppCardProps {
  IconComponent: React.ElementType
  title: string
  desc: string
  url: string
}

export function AppCard({ IconComponent, title, desc, url }: AppCardProps) {
  return (
    <div>
        <div>
            {<IconComponent />}
        </div>
        <p>{title}</p>
        <p>{desc}</p>

        <div>
            <button>Try Now</button>
        </div>
    </div>
   
  );
}

export default AppCard;