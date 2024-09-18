'use client';
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EventCard from "@/components/EventCard";

async function EventsComponent() {
    const searchParam = useSearchParams();
    const response = await fetch("https://qevent-backend.labs.crio.do/events");
    let events = await response.json();
    if (searchParam?.get('artist'))
        events = events.filter(event => event.artist === searchParam.get('artist'))
    if (searchParam?.get('tag'))
        events = events.filter(event => event.tags.includes(searchParam.get('tag')));

    return (
        <div className="flex flex-row gap-x-2 gap-y-2 px-3 py-3 flex-wrap justify-evenly">
            {events.map(event => (<EventCard eventData={event} />))}
        </div>
    )
}

export default function EventsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <EventsComponent />
        </Suspense>
      );
}