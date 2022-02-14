import styled from "styled-components";

export const Table = styled.div`
    display: table;
    max-width: 20em;
    float: right;
    display: flex;
    align-items: center;
`
export const Row = styled.div`
    display: table-row;
`
export const Heading = styled.div`
    background-color: #eee;
    display: table-header-group;
    font-weight: bold;
`
export const Cell = styled.div`
    border: 1px solid #999999;
    display: table-cell;
    padding: 3px 10px;
`
export const Head = styled.div`
    border: 1px solid #999999;
    display: table-cell;
    padding: 3px 10px;
`
export const Foot = styled.div`
    background-color: #eee;
    display: table-footer-group;
    font-weight: bold;
`
export const Body = styled.div`
    display: table-table-row-group;
`
export const Conteiner = styled.div`
    display: flex;
    opacity: 0.9;
    background-color: #99aaab;
    justify-content: center ;
    width: 100%;
`
export const IMG = styled.img`
    width: 150px;
    height: 150px;
`