import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../redux/actions/tabActions";
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import OsiTab from "../atoms/OsiTab";

const OsiTabs = (props) => {
    const dispatch = useDispatch()
    const tab = useSelector((state) => state.getTab.tab)
    
    const [tabsData, setTabsData] = useState([])
    const [selectedTab, setSelectedTab] = useState(0)
    const [parentPath, setParentPath] = useState('')

    useEffect(() => {
        const newTabsData = [];
        setParentPath(makeParentPath(props.id))
        React.Children.forEach(props.children, element => {
            if (!React.isValidElement(element)) return;
            if (element.type.name === 'OsiTab') {
                const { ...props } = element;
                newTabsData.push({
                    ...props.props,
                    parentPath: parentPath
                })
            }
        })
        setTabsData(newTabsData)
        setNewIndex(newTabsData)

        return () => {
            setTabsData([])
        }
    }, [props, tab.path])

    const handleClick = (event, newItem) => {
        console.log(newItem)
        let newPath = newItem.parentPath + '/' + newItem.id
        let action = newItem.action?.replace('$this', newItem.label).replace(newItem.id, newItem.label)
        dispatch(setTab({
            action: action,
            path: newPath
        }))
        setSelectedTab(tabsData.findIndex(item => newItem.id === item.id))
    }

    const makeParentPath = (id) => {
        let parentPath = 'tabs_0'
        if (id === 'tabs_0') {
            return parentPath
        }
        let tabIds = id.replace('tabs_', '').split('_')
        let tabsName = 'tabs_0'
        let tabName = ''
        for (let i = 0; i < tabIds.length; i++) {
            if (i === 0) {
                tabName = tabIds[0]
                parentPath += '/tab_' + tabName
            } else {
                tabsName = tabName
                tabName = tabName + '_' + tabIds[i]
                parentPath += '/tabs_' + tabsName + '/tab_' + tabName
            }
        }
        parentPath = parentPath + '/' + id

        return parentPath
    }

    const setNewIndex = (newTabsData) => {
        console.log(newTabsData)
        let id = -1
        let newIndex = -1
        if (tab.path) {
            const newTab = tab.path.split('/');
            if (newTab.length) {
                id = newTab[newTab.length - 1]
                console.log('id', id)
                newIndex = newTabsData.findIndex(item => id === item.id)
                console.log('newIndex', newIndex)
                if (newIndex >= 0) {
                    setSelectedTab(newIndex)
                }
            }
        }

        return 0
    }

    return (
        <>
            <Tabs
                value={selectedTab}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
            >
                {
                    tabsData.map((tab, index) => {
                        return (
                            <OsiTab
                                selected={index === selectedTab}
                                id={tab.id}
                                parentPath={parentPath}
                                label={tab.label}
                                key={index}
                                onClick={handleClick}
                                action={tab.actionLabel}
                            />
                        )
                    })

                }
            </Tabs>
            <Box className="mt-5">
                {tabsData[selectedTab] && tabsData[selectedTab].children}
            </Box>

        </>
    )
}

export default OsiTabs