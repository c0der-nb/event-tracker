import ArtistCard from "@/components/ArtistCard";

export default async function ArtistsPage() {
    const apiResponse = await fetch("https://qevent-backend.labs.crio.do/artists");
    const artists = await apiResponse.json();
    return (
        <div className="flex flex-row gap-x-2 gap-y-2 px-3 py-3 flex-wrap justify-evenly">
            {artists.map(artist => (<ArtistCard artistData={artist} />))}
        </div>
    )
}