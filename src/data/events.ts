export interface CalendarEvent {
	/** Local event date, in YYYY-MM-DD format. */
	date: string;
	title: string;
	location: string;
	time?: string;
	description?: string;
	url?: string;
}

// Add confirmed events here. They appear on the homepage in date order.
// Example (replace the details before uncommenting):
// {
//   date: '2027-05-15',
//   title: 'Concert title',
//   location: 'Venue, city',
//   time: '19:00',
//   description: 'A short description of the programme.',
//   url: 'https://example.com/tickets',
// },


export const events: CalendarEvent[] = [
	{
		date: '2026-12-15',
		title: 'Christmas Concert',
		location: 'Oslo Concert Hall, Oslo',
		time: '19:00',
		description: 'Join us for a festive evening of music and celebration.',
		url: 'https://example.com/tickets',
	},
];
