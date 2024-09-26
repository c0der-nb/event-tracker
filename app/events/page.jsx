import EventCard from "@/components/EventCard";

export default async function EventsPage({ searchParams }) {
    let events = await fetch("https://qevent-backend.labs.crio.do/events").then((res) => res.json());
    if (searchParams && searchParams['artist'])
        events = events.filter(event => event.artist === searchParams['artist'])
    if (searchParams && searchParams['tag'])
        events = events.filter(event => event.tags.includes(searchParams['tag']));

    return (
        <div className="flex flex-row gap-x-2 gap-y-2 px-3 py-3 flex-wrap justify-evenly">
            {events.map(event => (<EventCard eventData={event} />))}
        </div>
    )
}