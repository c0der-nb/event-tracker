import { Suspense } from "react";
import EventCard from "@/components/EventCard";

async function EventsComponent({searchParams}) {
    const response = await fetch("https://qevent-backend.labs.crio.do/events");
    let events = await response.json();
    if (searchParams?.get('artist'))
        events = events.filter(event => event.artist === searchParams.get('artist'))
    if (searchParams?.get('tag'))
        events = events.filter(event => event.tags.includes(searchParams.get('tag')));

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
      );
}