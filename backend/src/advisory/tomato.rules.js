export const tomatoRules = {
  TOMATO_LATE_BLIGHT: {
    LOW: {
      home_remedy: [
        "Remove affected leaves",
        "Avoid overhead irrigation"
      ],
      organic: [
        "Spray neem oil (3%) every 7 days"
      ],
      chemical: []
    },

    MEDIUM: {
      home_remedy: [
        "Remove infected plants from field edges"
      ],
      organic: [
        "Neem oil + baking soda spray"
      ],
      chemical: [
        "Copper oxychloride @ 2g/L"
      ]
    },

    HIGH: {
      home_remedy: [],
      organic: [],
      chemical: [
        "Mancozeb 75% WP @ 2g/L",
        "Metalaxyl + Mancozeb (as per label)"
      ]
    }
  }
};
