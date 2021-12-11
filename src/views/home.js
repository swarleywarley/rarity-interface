import React, { useState, useEffect } from 'react'

import styled from 'styled-components'

import Card from '../components/card'
import Header from '../components/header'
import { TOKENS } from '../style'

import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

import { getGraphSummoners } from '../hooks/graph'
import { getBase, getAttributes, getSkills, getGold, getNames } from '../hooks/rarity'

const Home = () => {

  const [summoners, setSummoners] = useState([]);
  const { account, activate, library } = useWeb3React()
  const injected = new InjectedConnector({
    supportedChainIds: [250],
  })

  const connectWallet = () => {
    if (!account) activate(injected)
  }

  const shortenAddress = (addr) => {
    const front = addr.slice(0, 5)
    const back = addr.slice(addr.length-4)
    return front + '...' + back
  }

  const getSummonerData = async () => {
    const graph = await getGraphSummoners(account)

    const summonerIds = graph.map(item => item.id)
    const xp = await getBase(summonerIds, library, account)
    const attr = await getAttributes(summonerIds, library, account)
    const gold = await getGold(summonerIds, library, account)
    const skills = await getSkills(summonerIds, library, account)
    const names = await getNames(summonerIds, library, account)
    const output = graph.map((summoner, i) => {
      var data = summoner
      data['skills'] = skills[i]
      data['name'] = names[i]
      if (summoner.id === xp[i].id) { data = {...data, ...xp[i]} }
      if (summoner.id === attr[i].id) { data = {...data, ...attr[i]} }
      if (summoner.id === gold[i].id) { data = {...data, ...gold[i]} }
      return data 
    })
    return output
  }

  connectWallet()

  useEffect(async () => {
    if (account) {
      const data = await getSummonerData()
      setSummoners(data)
    }
  }, [account]);


  return (
    <Container>
      <Header button={account ? shortenAddress(account) :'Connect Wallet'} onClick={connectWallet} />
      <Body>
        <UserDetails>
          <Text>
            <Text1>
              # of Summoners: {summoners.length}
              <span dangerouslySetInnerHTML={{__html: ' ',}}
              />
            </Text1>
          </Text>
        </UserDetails>
        <UserSummoners>
            {summoners.map(item => {
                return (
                    <Card
                        key={item.id}
                        id={parseInt(item.id)}
                        class={item.class}
                        level={item.level}
                        gold={item.gold}
                        xp={item.xp}
                        str={item.strength}
                        dex={item.dexterity}
                        con={item.constitution}
                        int={item.intelligence}
                        wis={item.wisdom}
                        cha={item.charisma}
                        skills={item.skills}
                    />
                )
            })}
        </UserSummoners>
      </Body>
    </Container>
  )
}

export default Home

const Container = styled('div')({
  width: '100%',
  display: 'flex',
  overflow: 'auto',
  'min-height': '100vh',
  'align-items': 'center',
  'flex-direction': 'column',
  'background-color': '#D9D9D9',
})

const Body = styled('div')({
  width: '100%',
  height: 'auto',
  display: 'flex',
  position: 'relative',
  'align-items': 'flex-start',
  'flex-direction': 'column',
  'justify-content': 'flex-start',
})

const UserDetails = styled('div')({
  width: '100%',
  height: '92px',
  display: 'flex',
  position: 'relative',
  'align-items': 'flex-start',
  'flex-direction': 'row',
  'justify-content': 'flex-start',
})

const Text = styled('span')({
  margin: TOKENS.DlSpaceSpaceUnit,
  'font-size': '24px',
  'font-style': 'normal',
  'font-weight': '700',
  'align-self': 'center',
})

const Text1 = styled('span')({
  'font-style': 'normal',
  'font-weight': '600',
})

const UserSummoners = styled('div')({
  flex: '0',
  width: '100%',
  height: '1384px',
  display: 'flex',
  'flex-wrap': 'wrap',
  'align-items': 'flex-start',
  'flex-direction': 'row',
  'justify-content': 'flex-start',
})