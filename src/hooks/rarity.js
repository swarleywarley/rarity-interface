import { Contract } from '@ethersproject/contracts'

import ABI_ATTRIBUTES from '../abis/attributes.json'
import ABI_BASE from '../abis/base.json'
import ABI_FEATS from '../abis/feats.json'
import ABI_GOLD from '../abis/gold.json'
import ABI_SKILLS from '../abis/skills.json'
import ABI_NAMES from '../abis/names.json'

import { ADDRESSES } from '../constants/addresses'


export async function getBase(summonerIds, library, account) {
    if (account) {
        const contract = new Contract(ADDRESSES.base, ABI_BASE, library.getSigner(account).connectUnchecked())
        const base = summonerIds.map(async (summonerId) => {
            const response = await contract.summoner(summonerId)
            const xpRequired = await contract.xp_required(response._level)
            const processed = {
                id: summonerId,
                xp: response._xp / 1e18,
                log: response._log.toString(),
                class: response._class.toNumber(),
                level: response._level.toNumber(),
                xp_required: xpRequired / 1e18,
            }
            return processed
        })
        return Promise.all(base)
    }
}

export async function getAttributes(summonerIds, library, account) {
    if (account) {
        const contract = new Contract(ADDRESSES.attributes, ABI_ATTRIBUTES, library.getSigner(account).connectUnchecked())
        const attributes = summonerIds.map(async (summonerId) => { 
            const responseRaw = await contract.tokenURI(summonerId)
            const responseBase64 = responseRaw.split(',')[1]
            const responseString = new Buffer(responseBase64, 'base64').toString('ascii')
            const responseJson = JSON.parse(responseString)
            const imageBase64 = responseJson['image'].split(',')[1]
            const imageString = new Buffer(imageBase64, 'base64').toString('ascii')
            const parser = new DOMParser()
            const imageParsed = parser.parseFromString(imageString, 'image/svg+xml')
            const imageText = imageParsed.querySelectorAll('text')

            var attributes = {id: summonerId}
            imageText.forEach(attrib => {
                const key = attrib.textContent.split(' ')[0]
                const value = attrib.textContent.split(' ')[1]
                attributes[key] = Number(value)
            })
            return attributes
        })
        return Promise.all(attributes)
    }
}

export async function getGold(summonerIds, library, account) {
    if (account) {
        const contract = new Contract(ADDRESSES.gold, ABI_GOLD, library.getSigner(account).connectUnchecked())
        const gold = summonerIds.map(async (summonerId) => {
            const response = await contract.balanceOf(summonerId)
            return {id: summonerId, gold: response / 1e18,}
        })
        return Promise.all(gold)
    }
}

export async function getSkills(summonerIds, library, account) {
    if (account) {
        const contract = new Contract(ADDRESSES.skills, ABI_SKILLS, library.getSigner(account).connectUnchecked())
        const skills = summonerIds.map(async (summonerId) => {
            const response = await contract.get_skills(summonerId)
            const processed = response
                .map((level, i) => { if (level > 0) { return {id: i, level: level}}})
                .filter(item => {return item !== undefined})
            return processed
        })
        return Promise.all(skills)
    }
}

export async function getFeats(summonerIds, library, account) {
    if (account) {
        const contract = new Contract(ADDRESSES.feats, ABI_FEATS, library.getSigner(account).connectUnchecked())
        const feats = summonerIds.map(async (summonerId) => {
            const response = await contract.get_feats_by_id(summonerId)
            return response
        })
        return Promise.all(feats)
    }
}

export async function getNames(summonerIds, library, account) {
    if (account) {
        const contract = new Contract(ADDRESSES.names, ABI_NAMES, library.getSigner(account).connectUnchecked())
        const feats = summonerIds.map(async (summonerId) => {
            const response = await contract.summoner_name(summonerId)
            return response
        })
        return Promise.all(feats)
    }
}