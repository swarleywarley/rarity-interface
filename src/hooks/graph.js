export async function getGraphSummoners(ownerAddress) {
    const result = await fetch('https://api.thegraph.com/subgraphs/name/rarity-adventure/rarity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        query: `
        query {
            summoners(where: {owner: "${ownerAddress}"}) {
                id
                owner
                _class
                _level
            }
        }
        `
        })
    })
    .then(res => res.json())
    .then(res => res.data.summoners)
    return result
}

export async function getGraphUsers(ownerAddress) {
    const result = await fetch('https://api.thegraph.com/subgraphs/name/rarity-adventure/rarity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        query: `
        query {
            users(where: {id: "${ownerAddress}"}) {
                id
                count
            }
        }
        `
        })
    })
    .then(res => res.json())
    .then(res => res.data.users)
    return result
}
