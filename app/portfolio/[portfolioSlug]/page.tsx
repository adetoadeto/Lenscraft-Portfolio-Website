import PortfolioDetailGrid from "@/components/portfolio/portfolio-details/portfolio-detail-grid";
import { PortfolioDetailHeader } from "@/components/portfolio/portfolio-details/portfolio-detail-header";

import classes from "./page.module.css"

interface PortfolioDetailPage {
    params: { 
        portfolioSlug: string 
    }
}

export default function PortfolioDetailPage({ params }:  PortfolioDetailPage) {
    console.log(params)

    const portfolioType = params.portfolioSlug;

    return (
        <section className={classes["portfolio-details"]}>
            <PortfolioDetailHeader />
            <PortfolioDetailGrid />
        </section>
    )
}