import EventCard from "@/components/EventCard";
import { Suspense } from "react";

async function EventsComponent({ searchParams }) {
    const response = await fetch("https://qevent-backend.labs.crio.do/events");
    let events = await response.json();
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
export default function EventsPage() {
    return (
        <Suspense fallback={<div className="h-[80vh] flex flex-row items-center justify-center">Loading...</div>}>
          <EventsComponent />
        </Suspense>
    )
}