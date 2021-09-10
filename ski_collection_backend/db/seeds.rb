
Ski.destroy_all
User.destroy_all

benton = User.create(username: "Benton", password: "benton123")
rachel = User.create(username: "Rachel", password: "rachel123")
cindy = User.create(username: "Cindy", password: "cindy123")


Ski.create([
    {
        brand: "Solomon",
        model: "X-Scream",
        description: "Popular older model",
        usage: "Alpine",
        user: benton
    },
    {
        brand: "Volkls",
        model: "Karma",
        description: "Stout mid-wide",
        usage: "Alpine",
        user: benton
    },
    {
        brand: "Fischer",
        model: "Lunar",
        description: "Pure bump skis",
        usage: "Alpine",
        user: benton
    }
])