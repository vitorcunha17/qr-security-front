import React, { useState, useEffect } from 'react';
import { Input, Icon, Button, Table } from  'antd';
import PropTypes from 'prop-types';
import swal from 'sweetalert2';

const { Search } = Input;

export default function DataTable({ Datasource, Columns, Loading, ...rest }) {
  const [dataSource, setDataSource] = useState(Datasource);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setDataSource(Datasource);
  }, [Datasource])

  function onChangeSearch(val) {
    if(val === '') {
      setDataSource(Datasource); 
      setSearchValue('');
    }

    let datasourceSearch = dataSource.filter(item => {
        let value = item.name.toLowerCase();
        if(value.indexOf(val.toLowerCase()) !== -1) {
          return item;
        }
        return false;
    });
    
    if(datasourceSearch.length === 0) {
      setDataSource(datasourceSearch);
      swal("Atenção", "Não foi encontrado nenhum registro !", "warning",
        setSearchValue('')
      ).then(
        setDataSource(Datasource)
      );
    }else{
      setDataSource(datasourceSearch);
    }
  }
  
  return (
    <>
      <Search 
        placeholder="Pesquisar" 
        value={searchValue} 
        onChange={(e) => { 
          setSearchValue(e.target.value);
          if(e.target.value === '') {
            setDataSource(Datasource);
          }
        }} 
        onSearch={(val) => onChangeSearch(val)} 
        enterButton 
        style={{ width: '88%' }} 
      /> &nbsp;
      <Button 
        className="btn ant-btn-primary" 
        onClick={() => {
          setDataSource(Datasource); 
          setSearchValue('');
        }}
      > 
        <Icon type="rest" />&nbsp;Limpar 
      </Button>
      <Table 
        style={{ marginTop: '22px', overflowY: 'auto'}}
        columns={Columns}
        dataSource={dataSource}
        loading={Loading}
        {...rest}
      />
    </>
  );
}

DataTable.propTypes = {
  DataSource: PropTypes.array.isRequired,
  Columns: PropTypes.object.isRequired,
  Loading: PropTypes.bool
}
