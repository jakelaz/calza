// Function to generate personalized titles based on a customizable prompt
const generatePersonalizedTitle = (event, prompt) => {
  // Default prompt if none provided
  const defaultPrompt = "Create a conversational, standalone title for this event that would make sense in a calendar without context. Make it engaging but not overly casual. Avoid ellipsis.";
  
  // Use the provided prompt or default
  const titlePrompt = prompt || defaultPrompt;
  
  // This is a placeholder for the actual implementation
  // In a real app, this would call an AI service or use a template system
  // For now, we'll use a simple transformation based on event type
  
  let personalizedTitle = event.original_title;
  
  // Remove ellipsis
  personalizedTitle = personalizedTitle.replace(/\.\.\.$/, '');
  
  // Add a conversational prefix based on event type
  switch(event.original_event_type) {
    case 'art':
      personalizedTitle = `Check out ${personalizedTitle}`;
      break;
    case 'music':
      personalizedTitle = `Listen to ${personalizedTitle}`;
      break;
    case 'food':
      personalizedTitle = `Taste ${personalizedTitle}`;
      break;
    case 'entertainment':
      personalizedTitle = `Experience ${personalizedTitle}`;
      break;
    case 'fitness':
      personalizedTitle = `Join ${personalizedTitle}`;
      break;
    case 'education':
      personalizedTitle = `Learn at ${personalizedTitle}`;
      break;
    case 'wellness':
      personalizedTitle = `Relax with ${personalizedTitle}`;
      break;
    case 'community':
      personalizedTitle = `Connect at ${personalizedTitle}`;
      break;
    case 'business':
      personalizedTitle = `Network at ${personalizedTitle}`;
      break;
    default:
      personalizedTitle = `Don't miss ${personalizedTitle}`;
  }
  
  return personalizedTitle;
};

// Function to generate personalized descriptions
const generatePersonalizedDescription = (event) => {
  // Extract the Instagram handle from the source
  const instagramHandle = event.original_source;
  
  // Create Instagram profile URL
  const instagramUrl = `https://instagram.com/${instagramHandle.substring(1)}`;
  
  // Create a personalized description with the specified structure
  return `We're showing you this because you follow ${instagramHandle}\n\n${event.original_description}\n\nLocation: ${event.original_location_name}\n${event.original_location_address}\n\nVisit ${instagramHandle} on Instagram: ${instagramUrl}`;
};

const events = [
  {
    // Original data fields
    original_event_id: "evt_001",
    original_source: "@tlstudio_nyc",
    original_event_type: "art",
    original_title: "The Space Between Knowing...",
    original_description: "Exhibition curated by Naomi Lev featuring works by Shony Rivnay exploring the spaces and energies between things.",
    original_start_datetime: "2025-05-03T00:00:00",
    original_end_datetime: "2025-05-27T23:59:59",
    original_location_name: "@tlstudio_nyc",
    original_location_address: "102 Franklin Street, #2, New York, NY 10013",
    original_neighborhood: "Tribeca",
    original_url: "https://instagram.com/tlstudio_nyc",
    
    // Personalized fields for calendar feed
    personalized_title: "Explore this new exhibition",
    personalized_description: "We're showing you this because you follow @tlstudio_nyc\n\nExhibition curated by Naomi Lev featuring works by Shony Rivnay exploring the spaces and energies between things.\n\nLocation: @tlstudio_nyc\n102 Franklin Street, #2, New York, NY 10013\n\nVisit @tlstudio_nyc on Instagram: https://instagram.com/tlstudio_nyc",
    personalized_url: "https://instagram.com/tlstudio_nyc"
  },
  {
    // Original data fields
    original_event_id: "evt_002",
    original_source: "@tlstudio_nyc",
    original_event_type: "art",
    original_title: "Opening Reception: The Space Between...",
    original_description: "Opening reception for The Space Between Knowing exhibition.",
    original_start_datetime: "2025-05-03T18:00:00",
    original_end_datetime: "2025-05-03T21:00:00",
    original_location_name: "@tlstudio_nyc",
    original_location_address: "102 Franklin Street, #2, New York, NY 10013",
    original_neighborhood: "Tribeca",
    original_url: "https://instagram.com/tlstudio_nyc",
    
    // Personalized fields for calendar feed
    personalized_title: "Celebrate this gallery opening",
    personalized_description: "We're showing you this because you follow @tlstudio_nyc\n\nOpening reception for The Space Between Knowing exhibition.\n\nLocation: @tlstudio_nyc\n102 Franklin Street, #2, New York, NY 10013\n\nVisit @tlstudio_nyc on Instagram: https://instagram.com/tlstudio_nyc",
    personalized_url: "https://instagram.com/tlstudio_nyc"
  },
  {
    // Original data fields
    original_event_id: "evt_003",
    original_source: "@tlstudio_nyc",
    original_event_type: "art",
    original_title: "Dance Performance: The Space Between...",
    original_description: "Dance performance as part of The Space Between Knowing exhibition.",
    original_start_datetime: "2025-05-17T18:00:00",
    original_end_datetime: "2025-05-17T21:00:00",
    original_location_name: "@tlstudio_nyc",
    original_location_address: "102 Franklin Street, #2, New York, NY 10013",
    original_neighborhood: "Tribeca",
    original_url: "https://instagram.com/tlstudio_nyc",
    
    // Personalized fields for calendar feed
    personalized_title: "Experience this dance performance",
    personalized_description: "We're showing you this because you follow @tlstudio_nyc\n\nDance performance as part of The Space Between Knowing exhibition.\n\nLocation: @tlstudio_nyc\n102 Franklin Street, #2, New York, NY 10013\n\nVisit @tlstudio_nyc on Instagram: https://instagram.com/tlstudio_nyc",
    personalized_url: "https://instagram.com/tlstudio_nyc"
  },
  {
    // Original data fields
    original_event_id: "evt_004",
    original_source: "@tlstudio_nyc",
    original_event_type: "art",
    original_title: "Artist Talk: Shony Rivnay...",
    original_description: "Conversation with the artist Shony Rivnay for The Space Between Knowing exhibition.",
    original_start_datetime: "2025-05-21T18:00:00",
    original_end_datetime: "2025-05-21T20:00:00",
    original_location_name: "@tlstudio_nyc",
    original_location_address: "102 Franklin Street, #2, New York, NY 10013",
    original_neighborhood: "Tribeca",
    original_url: "https://instagram.com/tlstudio_nyc",
    
    // Personalized fields for calendar feed
    personalized_title: "Listen to this artist talk",
    personalized_description: "We're showing you this because you follow @tlstudio_nyc\n\nConversation with the artist Shony Rivnay for The Space Between Knowing exhibition.\n\nLocation: @tlstudio_nyc\n102 Franklin Street, #2, New York, NY 10013\n\nVisit @tlstudio_nyc on Instagram: https://instagram.com/tlstudio_nyc",
    personalized_url: "https://instagram.com/tlstudio_nyc"
  },
  {
    // Original data fields
    original_event_id: "evt_005",
    original_source: "@cassette_nyc",
    original_event_type: "music",
    original_title: "People I Love & Spellbinder...",
    original_description: "Live music event featuring People I Love and Spellbinder, with opening acts Oddly Knocky and Blums.",
    original_start_datetime: "2025-05-22T20:00:00",
    original_end_datetime: "2025-05-23T01:00:00",
    original_location_name: "@cassette_nyc",
    original_location_address: "Cassette, New York City, NY",
    original_neighborhood: "New York City",
    original_url: "https://instagram.com/cassette_nyc",
    
    // Personalized fields for calendar feed
    personalized_title: "Dance to live music",
    personalized_description: "We're showing you this because you follow @cassette_nyc\n\nLive music event featuring People I Love and Spellbinder, with opening acts Oddly Knocky and Blums.\n\nLocation: @cassette_nyc\nCassette, New York City, NY\n\nVisit @cassette_nyc on Instagram: https://instagram.com/cassette_nyc",
    personalized_url: "https://instagram.com/cassette_nyc"
  },
  {
    // Original data fields
    original_event_id: "evt_006",
    original_source: "@gallery_nyc",
    original_event_type: "art",
    original_title: "Jared Buckhiester Exhibition...",
    original_description: "Opening of Jared Buckhiester's next solo exhibition at the gallery's New York location.",
    original_start_datetime: "2025-11-01T00:00:00",
    original_end_datetime: "2025-11-30T23:59:59",
    original_location_name: "@gallery_nyc",
    original_location_address: "Gallery NYC, New York City, NY",
    original_neighborhood: "New York City",
    original_url: "https://instagram.com/gallery_nyc",
    
    // Personalized fields for calendar feed
    personalized_title: "Discover this gallery exhibition",
    personalized_description: "We're showing you this because you follow @gallery_nyc\n\nOpening of Jared Buckhiester's next solo exhibition at the gallery's New York location.\n\nLocation: @gallery_nyc\nGallery NYC, New York City, NY\n\nVisit @gallery_nyc on Instagram: https://instagram.com/gallery_nyc",
    personalized_url: "https://instagram.com/gallery_nyc"
  },
  {
    // Original data fields
    original_event_id: "evt_007",
    original_source: "@guggenheim",
    original_event_type: "art",
    original_title: "A Poem for Deep Thinkers...",
    original_description: "A landmark, mid-career survey by Rashid Johnson at the Solomon R. Guggenheim Museum in New York City, featuring almost 90 works filling the rotunda, including the site‑specific installation \"Sanguine\" with an embedded piano and a dynamic sculptural stage activated by community events.",
    original_start_datetime: "2025-04-18T00:00:00",
    original_end_datetime: "2026-03-07T23:59:59",
    original_location_name: "@guggenheim",
    original_location_address: "1071 5th Ave, New York, NY 10128",
    original_neighborhood: "Upper East Side",
    original_url: "https://instagram.com/guggenheim",
    
    // Personalized fields for calendar feed
    personalized_title: "Wander through this exhibition",
    personalized_description: "We're showing you this because you follow @guggenheim\n\nA landmark, mid-career survey by Rashid Johnson at the Solomon R. Guggenheim Museum in New York City, featuring almost 90 works filling the rotunda, including the site‑specific installation \"Sanguine\" with an embedded piano and a dynamic sculptural stage activated by community events.\n\nLocation: @guggenheim\n1071 5th Ave, New York, NY 10128\n\nVisit @guggenheim on Instagram: https://instagram.com/guggenheim",
    personalized_url: "https://instagram.com/guggenheim"
  },
  {
    // Original data fields
    original_event_id: "evt_008",
    original_source: "@springstudios",
    original_event_type: "art",
    original_title: "Julia Jo: New Paintings...",
    original_description: "Return to Independent HQ with a solo presentation of new paintings by Julia Jo.",
    original_start_datetime: "2025-05-08T00:00:00",
    original_end_datetime: "2025-05-11T23:59:59",
    original_location_name: "@springstudios",
    original_location_address: "Spring Studios, New York City, NY",
    original_neighborhood: "New York City",
    original_url: "https://instagram.com/springstudios",
    
    // Personalized fields for calendar feed
    personalized_title: "Browse this art fair",
    personalized_description: "We're showing you this because you follow @springstudios\n\nReturn to Independent HQ with a solo presentation of new paintings by Julia Jo.\n\nLocation: @springstudios\nSpring Studios, New York City, NY\n\nVisit @springstudios on Instagram: https://instagram.com/springstudios",
    personalized_url: "https://instagram.com/springstudios"
  },
  {
    // Original data fields
    original_event_id: "evt_009",
    original_source: "@independent_hq",
    original_event_type: "art",
    original_title: "16th Edition of Independent Art Fair...",
    original_description: "YveYANG's inaugural presentation at Independent will feature new and recent works by Allan Rand, Huidi Xiang, and Xinran Liu.",
    original_start_datetime: "2025-05-08T00:00:00",
    original_end_datetime: "2025-05-11T23:59:59",
    original_location_name: "@independent_hq",
    original_location_address: "Spring Studios, Tribeca, New York, NY",
    original_neighborhood: "Tribeca",
    original_url: "https://instagram.com/independent_hq",
    
    // Personalized fields for calendar feed
    personalized_title: "Explore this art fair",
    personalized_description: "We're showing you this because you follow @independent_hq\n\nYveYANG's inaugural presentation at Independent will feature new and recent works by Allan Rand, Huidi Xiang, and Xinran Liu.\n\nLocation: @independent_hq\nSpring Studios, Tribeca, New York, NY\n\nVisit @independent_hq on Instagram: https://instagram.com/independent_hq",
    personalized_url: "https://instagram.com/independent_hq"
  }
];

// Example of how to use the function with a custom prompt
// const customPrompt = "Create a friendly, casual title for this event that would make sense in a calendar. Include the venue name if possible.";
// events.forEach(event => {
//   event.personalized_title = generatePersonalizedTitle(event, customPrompt);
// });

module.exports = events; 