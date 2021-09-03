import React,{useState} from 'react'
import styles from './tabs.module.css'
function Tabs() {
    var tabs = [
        {
            title:" Tab1",
            content: "Tab1 Content",
        },
        {
            title:" Tab2",
            content: "Tab2 Content",
        },
        {
            title:" Tab3",
            content: "Tab3 Content",
        },
        {
            title:" Tab4",
            content: "Tab4 Content",
        },
        {
            title:" Tab5",
            content: "Tab5 Content",
        },
        {
            title:" Tab6",
            content: "Tab6 Content",
        },
        {
            title:" Tab7",
            content: "Tab7 Content",
        },
        {
            title:" Tab8",
            content: "Tab8 Content",
        },
    ]
    let data = [...tabs]
    const limit = 3;
    const [startIndex , setStartIndex] = useState(0);
    const [endIndex , setEndIndex] = useState(2);
    const [tabsLimit , setTabsLimit] = useState(data).splice(startIndex,endIndex+1)
    const [tabList , setTabList ] = useState(tabsLimit)
    const [tabContent , setTabContent ] = useState(tabs[0].content)
    const [leftDisabled , setLeftDisabled ] = useState(true)
    const [rightDisabled , setRightDisabled ] = useState(false)
    const leftChevron = "<";
    const rightChevron = ">";

    const removeTab = (index)=>{
        console.log(index)
        let newTabs = [...tabsLimit];
        if(index+1<newTabs.length+1){
            newTabs.splice(index,1);
            console.log(newTabs)
            setTabsLimit(newTabs);
            setTabContent(newTabs[index+1].content)
        }
    }
    const showContent = (index) =>{
        setTabContent(tabList[index].content)
    }

    const rightChevronClick = () => {
        let newTabs = [...tabs];
        setLeftDisabled(false);
        setStartIndex(endIndex+1)
        endIndex+limit < tabs.length ? setEndIndex(endIndex+limit) : setEndIndex(tabs.length) 
        if(startIndex>=2 && endIndex<=8){
            const data = newTabs.slice(startIndex,endIndex+1)
            // setTabsLimit(data)
            console.log(tabsLimit)
            endIndex+limit > tabs.length ? setRightDisabled(true) : setRightDisabled(false);
            console.log(startIndex,endIndex)
            // console.log(tabsLimit)
        }

        // console.log(tabsLimit)
        // console.log(tabData)
        // console.log(tabs.length)
        // setStartIndex(endIndex+1);
        // endIndex < tabs.length ? setStartIndex(endIndex) : setStartIndex(0) 
        // setTabsLimit(tabs.splice(startIndex,endIndex))
    }
    return (
        <>
            <div className={styles.outer_wrapper}>
                <div disabled={leftDisabled} className={`${styles.chevron} ${styles.chevron_left}`}>
                    {leftChevron}
                </div>
                <div className={styles.tabs_container}>
                    {
                        tabsLimit && tabsLimit.map((tab,index)=>{
                            return (
                                <>
                                <div key = {index} className={styles.tab} onClick={()=>showContent(index)}>{tab.title}
                                    <div className={styles.closebtn} onClick={()=>removeTab(index)}>X</div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div disabled={rightDisabled} className={`${styles.chevron} ${styles.chevron_right}`}  onClick={() => rightChevronClick()}>
                    {rightChevron}
                </div>
            </div>
            <div className={styles.tab_content}>
                {tabContent}
            </div>
        </>
    )
}

export default Tabs
