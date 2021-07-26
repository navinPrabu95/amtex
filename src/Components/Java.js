import React, { useState } from 'react'
import Data from './Data'

const Java = () => {
    const [list, setList] = useState(Data)
    const [listIndex, setListIndex] = useState(Data)
    const [submit, setSubmit] = useState(Data)
    const [option, setOption] = useState([])
    const [errorMsg, setErrorMsg] = useState(false)



    const pageNo = (Number) => {
        let filterData = listIndex.filter((value, index) => {
            return value.id == Number
        })
        setList(filterData)
    }

    const PreviewData = (value) => {
        let pId = value.id - 1
        if (pId >= 1) {
            let sData = submit.filter((value, index) => {
                return value.id == pId
            })
            setList(sData);
        } else {
            return <p style={{ color: "red" }}>No data Left</p>
        }
    }

    const nextData = (value) => {
        let pId = value.id + 1
        let sData = submit.filter((value, index) => {
            return value.id == pId
        })
        setList(sData);
    }

    const getInput = (event) => {
        
        setOption(event.target.value)
    }

    const submitData = (user) => {
        if (option == '') {
            setErrorMsg(true)
        } else {
            setErrorMsg(false)
            let uId = user.id
            let nextUser = uId + 1
            let sData = submit.filter((value, index) => {
                return value.id == nextUser
            })
            setList(sData)
        }
    }

    const listData = list.map((value, index) => {
        return (
            <div key={value.id} className="inputData">
                <div className='inputs'><label>Option A:</label><input type="radio" value="answer-a" onChange={getInput}></input>{value.answer1} </div>
                <div className='inputs'><label>Option B:</label><input type="radio" value="answer-b" onChange={getInput}></input>{value.answer2} </div>
                <div className='inputs'><label>Option C:</label><input type="radio" value="answer-c" onChange={getInput}></input>{value.answer3} </div>
                <div className='inputs'><label>Option D:</label><input type="radio" value="answer-d" onChange={getInput}></input>{value.answer4} </div>
                <div>{errorMsg && alert('Please select your option')}</div>
                <div className='submit'> <button onClick={() => submitData(value)}>Submit</button> </div>

                <div className='Pageno'>
                    <button onClick={() => PreviewData(value)}>Prev</button>
                    <button onClick={() => pageNo(1)}>1</button>
                    <button onClick={() => pageNo(2)}>2</button>
                    <button onClick={() => nextData(value)}>Next</button>
                </div>
            </div>
        )
    })
    return (
        <div className="java-quis">

            <div className='QuisSide'>
                <div className='name1'>
                    <h3>LEVEL1-JAVA_Exam</h3>
                    <p>Please Read Questions Carefully</p>
                </div>
                <div className='name2'>
                    {
                        list.map((value) => {
                            return <p key={value.id}>{value.question}</p>
                        })
                    }
                </div>
            </div>
            <div className="answers">
                <p>Your Options are:</p>
                {listData}
            </div>
        </div>
    )
}

export default Java