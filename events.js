const events = [
  {
    event_id: "evt_001",
    source: "@nyc_rooftop",
    event_type: "social",
    title: "Sunset vibes at 230 Fifth...",
    description: "We're showing you this because you follow @nyc_rooftop\n\nUnwind with craft cocktails and stunning city views. Live DJ from 6-9 PM.\n\nLocation: The Rooftop at 230 Fifth\n230 Fifth Ave, New York, NY",
    start_datetime: "2025-04-02T17:00:00",
    end_datetime: "2025-04-02T21:00:00",
    location_name: "@nyc_rooftop",
    neighborhood: "Flatiron",
    personalized_title: "Sunset vibes at 230 Fifth...",
    calendar_title: "Sunset vibes at 230 Fifth..."
  },
  {
    event_id: "evt_002",
    source: "@nyc_food_fest",
    event_type: "food",
    title: "Foodie paradise in Brooklyn...",
    description: "We're showing you this because you follow @nyc_food_fest\n\nSample dishes from 50+ local restaurants. Live cooking demos and food trucks.\n\nLocation: Brooklyn Bridge Park\n334 Furman St, Brooklyn, NY",
    start_datetime: "2025-04-04T11:00:00",
    end_datetime: "2025-04-04T19:00:00",
    location_name: "@nyc_food_fest",
    neighborhood: "Brooklyn Heights",
    personalized_title: "Foodie paradise in Brooklyn...",
    calendar_title: "Foodie paradise in Brooklyn..."
  },
  {
    event_id: "evt_003",
    source: "@nyc_comedy",
    event_type: "entertainment",
    title: "Laughs guaranteed at Comedy Cellar...",
    description: "We're showing you this because you follow @nyc_comedy\n\nFeaturing top NYC comedians. Two drink minimum, 21+.\n\nLocation: The Comedy Cellar\n117 MacDougal St, New York, NY",
    start_datetime: "2025-04-05T20:00:00",
    end_datetime: "2025-04-05T22:00:00",
    location_name: "@nyc_comedy",
    neighborhood: "Greenwich Village",
    personalized_title: "Laughs guaranteed at Comedy Cellar...",
    calendar_title: "Laughs guaranteed at Comedy Cellar..."
  },
  {
    event_id: "evt_004",
    source: "@nyc_art_gallery",
    event_type: "art",
    title: "Art that captures the city...",
    description: "We're showing you this because you follow @nyc_art_gallery\n\nOpening reception for 'Urban Perspectives' featuring NYC street photography.\n\nLocation: Gagosian Gallery\n555 W 24th St, New York, NY",
    start_datetime: "2025-04-06T18:00:00",
    end_datetime: "2025-04-06T21:00:00",
    location_name: "@nyc_art_gallery",
    neighborhood: "Chelsea",
    personalized_title: "Art that captures the city...",
    calendar_title: "Art that captures the city..."
  },
  {
    event_id: "evt_005",
    source: "@nyc_yoga",
    event_type: "fitness",
    title: "Morning zen in the park...",
    description: "We're showing you this because you follow @nyc_yoga\n\nStart your day with an energizing yoga session overlooking the park.\n\nLocation: Central Park Great Lawn\nCentral Park, New York, NY",
    start_datetime: "2025-04-07T06:30:00",
    end_datetime: "2025-04-07T08:00:00",
    location_name: "@nyc_yoga",
    neighborhood: "Upper West Side",
    personalized_title: "Morning zen in the park...",
    calendar_title: "Morning zen in the park..."
  },
  {
    event_id: "evt_006",
    source: "@nyc_music",
    event_type: "music",
    title: "New music discovery night...",
    description: "We're showing you this because you follow @nyc_music\n\nFive up-and-coming indie bands performing live. Doors at 7 PM.\n\nLocation: Bowery Ballroom\n6 Delancey St, New York, NY",
    start_datetime: "2025-04-08T19:30:00",
    end_datetime: "2025-04-08T23:00:00",
    location_name: "@nyc_music",
    neighborhood: "Lower East Side",
    personalized_title: "New music discovery night...",
    calendar_title: "New music discovery night..."
  },
  {
    event_id: "evt_007",
    source: "@nyc_workshop",
    event_type: "education",
    title: "Unlock your writing potential...",
    description: "We're showing you this because you follow @nyc_workshop\n\nLearn storytelling techniques with award-winning author Sarah Chen.\n\nLocation: The Writers Room\n740 Broadway, New York, NY",
    start_datetime: "2025-04-09T14:00:00",
    end_datetime: "2025-04-09T16:00:00",
    location_name: "@nyc_workshop",
    neighborhood: "Union Square",
    personalized_title: "Unlock your writing potential...",
    calendar_title: "Unlock your writing potential..."
  },
  {
    event_id: "evt_008",
    source: "@nyc_fitness",
    event_type: "fitness",
    title: "Sweat session that delivers...",
    description: "We're showing you this because you follow @nyc_fitness\n\nHigh-intensity interval training with certified trainers. All levels welcome.\n\nLocation: Barry's Bootcamp\n28 W 23rd St, New York, NY",
    start_datetime: "2025-04-10T07:00:00",
    end_datetime: "2025-04-10T08:00:00",
    location_name: "@nyc_fitness",
    neighborhood: "Flatiron",
    personalized_title: "Sweat session that delivers...",
    calendar_title: "Sweat session that delivers..."
  },
  {
    event_id: "evt_009",
    source: "@nyc_food_tour",
    event_type: "food",
    title: "Food adventure in Chinatown...",
    description: "We're showing you this because you follow @nyc_food_tour\n\nExplore hidden gems and authentic cuisine in NYC's Chinatown.\n\nLocation: Chinatown\nCanal St & Mott St, New York, NY",
    start_datetime: "2025-04-11T11:00:00",
    end_datetime: "2025-04-11T14:00:00",
    location_name: "@nyc_food_tour",
    neighborhood: "Chinatown",
    personalized_title: "Food adventure in Chinatown...",
    calendar_title: "Food adventure in Chinatown..."
  },
  {
    event_id: "evt_010",
    source: "@nyc_art",
    event_type: "art",
    title: "Art that makes you think...",
    description: "We're showing you this because you follow @nyc_art\n\nGuided tour of the latest contemporary art exhibition.\n\nLocation: MoMA\n11 W 53rd St, New York, NY",
    start_datetime: "2025-04-12T14:00:00",
    end_datetime: "2025-04-12T16:00:00",
    location_name: "@nyc_art",
    neighborhood: "Midtown",
    personalized_title: "Art that makes you think...",
    calendar_title: "Art that makes you think..."
  },
  {
    event_id: "evt_011",
    source: "@nyc_networking",
    event_type: "business",
    title: "Network with the best...",
    description: "We're showing you this because you follow @nyc_networking\n\nConnect with founders and investors in the tech ecosystem.\n\nLocation: WeWork 85 Broad\n85 Broad St, New York, NY",
    start_datetime: "2025-04-13T18:00:00",
    end_datetime: "2025-04-13T21:00:00",
    location_name: "@nyc_networking",
    neighborhood: "Financial District",
    personalized_title: "Network with the best...",
    calendar_title: "Network with the best..."
  },
  {
    event_id: "evt_012",
    source: "@nyc_theater",
    event_type: "entertainment",
    title: "Theater that moves you...",
    description: "We're showing you this because you follow @nyc_theater\n\nAward-winning play 'The City That Never Sleeps' at the Public Theater.\n\nLocation: The Public Theater\n425 Lafayette St, New York, NY",
    start_datetime: "2025-04-14T19:30:00",
    end_datetime: "2025-04-14T21:30:00",
    location_name: "@nyc_theater",
    neighborhood: "East Village",
    personalized_title: "Theater that moves you...",
    calendar_title: "Theater that moves you..."
  },
  {
    event_id: "evt_013",
    source: "@nyc_meditation",
    event_type: "wellness",
    title: "Find your inner peace...",
    description: "We're showing you this because you follow @nyc_meditation\n\nGuided meditation session for stress relief and mental clarity.\n\nLocation: MNDFL Meditation\n123 W 18th St, New York, NY",
    start_datetime: "2025-04-15T12:00:00",
    end_datetime: "2025-04-15T13:00:00",
    location_name: "@nyc_meditation",
    neighborhood: "Flatiron",
    personalized_title: "Find your inner peace...",
    calendar_title: "Find your inner peace..."
  },
  {
    event_id: "evt_014",
    source: "@nyc_dance",
    event_type: "entertainment",
    title: "Dance the night away...",
    description: "We're showing you this because you follow @nyc_dance\n\nLearn salsa moves and dance the night away. Beginners welcome!\n\nLocation: Salsa Social\n234 W 42nd St, New York, NY",
    start_datetime: "2025-04-16T20:00:00",
    end_datetime: "2025-04-16T23:00:00",
    location_name: "@nyc_dance",
    neighborhood: "Times Square",
    personalized_title: "Dance the night away...",
    calendar_title: "Dance the night away, Jake..."
  },
  {
    event_id: "evt_015",
    source: "@nyc_volunteer",
    event_type: "community",
    title: "Make a difference today...",
    description: "We're showing you this because you follow @nyc_volunteer\n\nHelp pack and distribute food to those in need.\n\nLocation: City Harvest\n150 52nd St, Brooklyn, NY",
    start_datetime: "2025-04-17T09:00:00",
    end_datetime: "2025-04-17T12:00:00",
    location_name: "@nyc_volunteer",
    neighborhood: "Sunset Park",
    personalized_title: "Make a difference today...",
    calendar_title: "Make a difference today..."
  },
  {
    event_id: "evt_016",
    source: "@nyc_photography",
    event_type: "education",
    title: "Capture the city's soul...",
    description: "We're showing you this because you follow @nyc_photography\n\nLearn to capture NYC's energy through your lens.\n\nLocation: B&H Photo\n420 9th Ave, New York, NY",
    start_datetime: "2025-04-18T10:00:00",
    end_datetime: "2025-04-18T13:00:00",
    location_name: "@nyc_photography",
    neighborhood: "Chelsea",
    personalized_title: "Capture the city's soul...",
    calendar_title: "Capture the city's soul..."
  },
  {
    event_id: "evt_017",
    source: "@nyc_cycling",
    event_type: "fitness",
    title: "Park adventure on wheels...",
    description: "We're showing you this because you follow @nyc_cycling\n\nGuided bike tour through Central Park's hidden gems.\n\nLocation: Central Park\nCentral Park, New York, NY",
    start_datetime: "2025-04-19T09:00:00",
    end_datetime: "2025-04-19T11:00:00",
    location_name: "@nyc_cycling",
    neighborhood: "Upper West Side",
    personalized_title: "Park adventure on wheels...",
    calendar_title: "Park adventure on wheels..."
  },
  {
    event_id: "evt_018",
    source: "@nyc_cooking",
    event_type: "food",
    title: "Master the art of pasta...",
    description: "We're showing you this because you follow @nyc_cooking\n\nLearn to make authentic pasta from scratch with Chef Maria.\n\nLocation: Eataly\n200 5th Ave, New York, NY",
    start_datetime: "2025-04-20T18:00:00",
    end_datetime: "2025-04-20T21:00:00",
    location_name: "@nyc_cooking",
    neighborhood: "Flatiron",
    personalized_title: "Master the art of pasta...",
    calendar_title: "Master the art of pasta..."
  },
  {
    event_id: "evt_019",
    source: "@nyc_jazz",
    event_type: "music",
    title: "Jazz and brunch perfection...",
    description: "We're showing you this because you follow @nyc_jazz\n\nSunday jazz brunch with live music and bottomless mimosas.\n\nLocation: Blue Note Jazz Club\n131 W 3rd St, New York, NY",
    start_datetime: "2025-04-21T11:00:00",
    end_datetime: "2025-04-21T14:00:00",
    location_name: "@nyc_jazz",
    neighborhood: "Greenwich Village",
    personalized_title: "Jazz and brunch perfection...",
    calendar_title: "Jazz and brunch perfection..."
  }
];

module.exports = events; 