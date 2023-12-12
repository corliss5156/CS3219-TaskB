import {
    Table,
    Header,
    HeaderRow,
    Body,
    Row,
    HeaderCell,
    Cell,
  } from '@table-library/react-table-library/table';
  import { useTheme } from '@table-library/react-table-library/theme';
  import { getTheme } from '@table-library/react-table-library/baseline';

export default function AttachedFilesTable () {
    const data = {
        nodes: [{"Key":"material_oh_reskill.azw","LastModified":"2023-12-05T08:02:50.000Z","Size":1},{"Key":"uploads/Chapter 319.docx","LastModified":"2023-11-30T06:55:42.000Z","Size":22209}]
    }

    return (
        <Table data = {data}> 
        {(tableList)=>{
            <Header> 
                <HeaderRow> 
                    <HeaderCell>File name</HeaderCell>
                    <HeaderCell>File size</HeaderCell>
                    <HeaderCell>Last modified</HeaderCell>
                </HeaderRow>
                <Body> 
                {tableList.map((item)=>(
                    <Row key={item.Key} item={item}>
                        <Cell>{item.Key}</Cell>
                        <Cell>{item.Size}</Cell>
                        <Cell></Cell>
                    </Row>
                ))}
                </Body>
            </Header>
        }}
        </Table>
    )
}