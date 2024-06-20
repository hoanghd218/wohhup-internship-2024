function Stock(props){

   const tableStyle = {
      width: '100%', 
   }

   // const stockItems = ['PDA', 'SDA', 'HSA', 'NVD', 'APL'];
   // stockItems.sort();

   const stockRanking = [{id: 1, name: 'ADS', ranking: 1},
                         {id: 2, name: 'AME', ranking: 2},
                         {id: 3, name: 'AMD', ranking: 3},
                         {id: 4, name: 'MCS', ranking: 4},
                         {id: 5, name: 'BCN', ranking: 5}];

   // const stockList = stockItems.map(stock => <li>{stock}</li>)
   const stockRank = stockRanking.map(stockR => <li key={stockR.id}>{stockR.name}, rank: 
                                                 {stockR.ranking}</li>);

   return(
      <>
         <ul>{stockRank}</ul> 
      </> 
   );
}

export default Stock