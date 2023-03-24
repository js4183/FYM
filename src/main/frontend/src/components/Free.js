import React from 'react';
import {Space, Table, Input, Select, Button} from 'antd';
import {Link, useLocation, useNavigate} from "react-router-dom";

const Free = ({viewList}) => {
    const navigate = useNavigate();

    const freeDetail = (e) => {
        // navigate('/Board/Free');
        console.log(e.target);
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const writeBoard = () => {
        navigate('/board/write', { state: { category: '자유게시판' }});
    }

    let fbViewList = [];

    for (var i = 0; i<viewList.length; i++) {
        if(viewList[i].board_cate === '자유게시판') {
            fbViewList.push(viewList[i]);
        }
    }

    const columns = [
        {
            title: '번호',
            dataIndex: 'board_idx',
            key: 'board_idx',
            align: "center",
        },
        {
            title: '제목',
            dataIndex: 'board_title',
            key: 'board_title',
            align: "center",
            render: (_, record) => (
                <Link to={`/Board/Free?idx=${record.board_idx}`}>
                    {record.board_title}
                </Link>
            ),
        },
        {
            title: '작성자',
            dataIndex: 'user_nick',
            key: 'user_nick',
            align: "center",
        },
        {
            title: '작성일',
            dataIndex: 'board_date',
            key: 'board_date',
            align: "center",
        },
        {
            title: '조회수',
            dataIndex: 'board_cnt',
            key: 'board_cnt',
            align: "center",
        },
        {
            title: '좋아요',
            dataIndex: 'board_like',
            key: 'board_like',
            align: "center",
        },
    ];

    return (
        <div>
            <div className='boardContainer'>
                <Button onClick={writeBoard}>글쓰기</Button>
                <Space wrap>
                    <Select
                        defaultValue="작성자"
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: '작성자',
                                label: '작성자',
                            },
                            {
                                value: '제목+내용',
                                label: '제목+내용',
                            },
                        ]}
                    />
                    <Input.Group compact>
                        <Input.Search
                            allowClear
                            style={{
                                width: '100%',
                            }}
                        />
                    </Input.Group>
                </Space>
            </div>
            <Table
                style={{
                    marginTop: '10px',
                }}
                columns={columns} dataSource={fbViewList}/>
        </div>
    );
};

export default Free;
