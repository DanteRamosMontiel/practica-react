import Card from "./components/Card/Card"

export default function App() {
    return (
        <>
            <Card userName="danteramosss" name="Dante Ramos M." isFollowing={false} />
            <Card userName="midudev" name="Ángel Midudev" isFollowing={true} />
            <Card userName="MatiiCont" name="Matias nigga" isFollowing={false} />
            <Card userName="macasanmartinr" name="macuca" isFollowing={false} />
            <Card userName="nicoo__aguirre" name="nico" isFollowing={true} />
        </>
    )
}