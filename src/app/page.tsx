"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";

const events = [
  { date: 'April 25, 2025', time: '9:00 AM', name: 'Auto Extravaganza', description: 'A showcase of automotive engineering and design.' },
  { date: 'April 25, 2025', time: '10:00 AM', name: 'Mehendi Competition', description: 'A celebration of traditional art.' },
  { date: 'April 25, 2025', time: '2:00 PM', name: 'Gaming Tournament', description: 'Test your skills in various games.' },
  { date: 'April 25, 2025', time: '7:00 PM', name: 'Dance Night', description: 'An evening of rhythm and movement.' },
  { date: 'April 26, 2025', time: '10:00 AM', name: 'Math Tea Club', description: 'Discuss mathematics over tea.' },
  { date: 'April 26, 2025', time: '11:00 AM', name: 'Treasure Hunt', description: 'Follow clues and discover hidden treasures.' },
  { date: 'April 26, 2025', time: '2:00 PM', name: 'Dance and Singing Competitions', description: 'Showcase your talent.' },
  { date: 'April 26, 2025', time: '9:00 AM', name: 'Hackathons and Workshops', description: 'Collaborate and create.' },
  { date: 'April 27, 2025', time: '10:00 AM', name: 'Art Exhibition', description: 'Explore creativity through various art forms.' },
  { date: 'April 27, 2025', time: '11:00 AM', name: 'Dog Show', description: 'A delightful display of canine charm.' },
  { date: 'April 27, 2025', time: '7:00 PM', name: 'Night Concerts', description: 'Experience music under the stars.' },
  { date: 'April 27, 2025', time: '9:00 PM', name: 'Music & Dance Party', description: 'End the fest with a blast.' },
];

export default function Home() {
  const calculateTimeLeft = () => {
    const difference = +new Date("04/25/2025") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  const [date, setDate] = React.useState<Date | undefined>(new Date("04/25/2025"))

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Vidyuth 2K25</h1>
        <p className="text-muted-foreground">VidyaVardhaka College of Engineering, Mysuru</p>
      </header>

      <section className="mb-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Countdown Timer</CardTitle>
            <CardDescription>Time until Vidyuth 2K25 begins!</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">About Vidyuth 2K25</CardTitle>
            <CardDescription>Learn more about the fest and our college.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Vidyuth 2K25 is the annual college fest of VidyaVardhaka College of Engineering, Mysuru.
              It is a three-day extravaganza filled with technical events, cultural performances, and
              fun-filled activities.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Event Timeline</h2>
        <div className="flex flex-col">
          {events.map((event, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex items-center">
                <div className="w-24 flex-shrink-0 text-right mr-4">
                  <p className="font-bold">{event.date}</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
                <div className="relative">
                  <div className="absolute h-full border border-accent left-1/2 transform -translate-x-1/2"></div>
                  <Card className="relative z-10 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{event.name}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Registration Form</CardTitle>
            <CardDescription>Sign up for Vidyuth 2K25 events!</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div>
                <Label htmlFor="date">Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start" side="bottom">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) =>
                        date < new Date("2025-04-25") || date > new Date("2025-04-27")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="event">Event</Label>
                <Input type="text" id="event" placeholder="Event Name" />
              </div>
              <Button>Register</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
            <CardDescription>Get in touch with us for any inquiries.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Email: info@vidyuth2k25.com
              <br />
              Phone: +91 9876543210
            </p>
          </CardContent>
        </Card>
      </section>
      <footer className="mt-8 text-center text-muted-foreground">
        <Separator className="mb-4" />
        <p>© 2024 Vidyuth 2K25. All rights reserved.</p>
      </footer>
      <Toaster />
    </div>
  );
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}
import { Toaster } from "@/components/ui/toaster"

