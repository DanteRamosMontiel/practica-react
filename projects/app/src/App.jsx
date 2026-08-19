import Card from "./components/Card/Card"

export default function App() {
    return (
        <>
            <Card userName="danteramosss" name="Dante Ramos M." isFollowing={false} />
            <Card userName="midudev" name="Ángel Midudev" isFollowing={true} />
        </>
    )
}