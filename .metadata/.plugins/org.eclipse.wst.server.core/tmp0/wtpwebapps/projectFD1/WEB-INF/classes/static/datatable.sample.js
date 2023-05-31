     var table = $('#tnk_DataTable').dataTable({
/*       dom        : 'tB' + Public_Main_DataTable_Add_Dom,
       scrollX    : true,
       scrollY    : 1000,
       order      : [],
       lengthMenu : Public_Main_DataTable_Length_Menu,
       pageLength : 30,
       language   : COMMONDataTableLaguage,
         fixedColumns:   
         {
            left: 5,
         },                  
       columnDefs:
       [
            { type  : 'non-empty-string-sort',  targets: 'non-empty-string-sort'  },
             { type  : 'x-sort', targets: 'x-sort'  },
             Pulbic_DataTable_columnDefs,   
       ],
        buttons:
        [      
         {
               extend:'print',
            className:'d-none TNK0001MainPrint',
            exportOptions:Pulbic_ExportOptions,
           },
         ],  */    
       ajax : 
       {
         type     : 'POST',
         url      : '/view/TNK/TNK0001/main',
         dataType : 'json',
         data     : 
         {
               comp_id   : $('#_compid').val(),
               gcomp_id  : $('#_gcompid').val(),
               remain1   : r1,
               remain2   : r2,
         },
         dataSrc : function(result)
         {
		  // 여기가 데이터 받아온다
		  // console.log( result ); 
			 
           var color = '';
           var i = 0;
           _already_cust_array = [];
           $.each(result.RESULT_DATA,function(v,k){
            
            if( k.sk_company_code !== '' )
            {
               
               if( v+1 < result.RESULT_DATA.length  )
               {
                  if( color !== k.sk_company_code )
                  {
                     color = k.sk_company_code;   
                     k.color = Public_Stroke_Colors[i];
                     k.colorTop = 'Y';
                     k.colorMiddle = 'N';
                     k.colorBottom = 'N';
                  }
                  else if( color === k.sk_company_code && result.RESULT_DATA[v+1].sk_company_code === k.sk_company_code )
                  {
                     k.color = Public_Stroke_Colors[i];
                     k.colorTop = 'N';
                     k.colorMiddle = 'Y';
                     k.colorBottom = 'N';                     
                  }
                  else if( color === k.sk_company_code && result.RESULT_DATA[v+1].sk_company_code !== k.sk_company_code )
                  {
                     k.color = Public_Stroke_Colors[i];
                     k.colorTop = 'N';
                     k.colorMiddle = 'N';
                     k.colorBottom = 'Y';   
                     i++;
                     if( i === 9 ) i = 0;               
                  }
               }
               else
               {
                  k.color = Public_Stroke_Colors[i];
                  k.colorTop = 'N';
                  k.colorMiddle = 'N';
                  k.colorBottom = 'Y';                     
               }
            }
            k.index = addCommaDBData(result.RESULT_DATA.length-v);
            _already_cust_array.push(k.cust_id);
           });
           
           $('#TNK0001CountH4').empty().append('전체 : ' + addCommaDBData(result.RESULT_DATA.length) + '대');
           
           return result.RESULT_DATA;            
         } 
       },
       // 세팅하는곳
       // 열의 개수. data의 개수가 똑같아야된다.
       
       columns: 
          [
             {  
               data : 'index', 
               className : 'sortR',
             },
             {  
               data : 'comp_nm' ,        
               className : '',
             },
             {   
               data : 'isImport',         
               className : 'sortC',                         
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  var i = '';
                  if( cellData === '1' )
                  {
                     i = '<i class="fa fa-exclamation-circle me-1" style="color:#ff3300;"></i>';
                  }
                  $(td).empty().append(i);
               }                         
             },                          
             {   
               data : 'notUsed',         
               className : 'sortC',                          
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  var i = '';
                  if( cellData === 'N' )
                  {
                     i = '<i class="fa fa-exclamation-circle me-1" style="color:#22ff00;"></i>';
                  }
                  $(td).empty().append(i);
               }                
             },
             {   
               data : 'mix_cust_nm',     
               className : 'TNK0001MainHiddenCustNM',
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  if( rowData.sk_company_code !== '' )
                  {
                     if( rowData.colorTop === 'Y' )
                     {
                        $(td).css('border-top','2px solid ' + rowData.color);
                        $(td).css('border-left','2px solid ' + rowData.color);
                     }
                     else if( rowData.colorMiddle === 'Y' )
                     {
                        $(td).css('border-left','2px solid ' + rowData.color);
                     }
                     else if( rowData.colorBottom === 'Y' )
                     {
                        $(td).css('border-left','2px solid ' + rowData.color);
                        $(td).css('border-bottom','2px solid ' + rowData.color);                        
                     }
                  }
                  
                  if( rowData.isTargetShare === '1' )
                  {
                     $(td).empty().append( set_target_share_html(cellData) );
                  }   
                  else if( rowData.isShare === '1' )
                  {
                     $(td).empty().append( set_share_html(cellData) );
                  }               
                  
               }   
             },
             {  
               data : 'remain1_percent', 
               className : 'sortR',
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  if( rowData.sk_company_code !== '' )
                  {
                     if( rowData.colorTop === 'Y' )
                     {
                        $(td).css('border-top','2px solid ' + rowData.color);
                     }
                     else if( rowData.colorBottom === 'Y' )
                     {
                        $(td).css('border-bottom','2px solid ' + rowData.color);                        
                     }
                  }
               }               
             },
             {   
               data : 'remain2_percent', 
               className : 'sortR',
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  if( rowData.sk_company_code !== '' )
                  {
                     if( rowData.colorTop === 'Y' )
                     {
                        $(td).css('border-top','2px solid ' + rowData.color);
                        $(td).css('border-right','2px solid ' + rowData.color);   
                     }
                     else if( rowData.colorMiddle === 'Y' )
                     {
                        $(td).css('border-right','2px solid ' + rowData.color);
                     }
                     else if( rowData.colorBottom === 'Y' )
                     {
                        $(td).css('border-right','2px solid ' + rowData.color);
                        $(td).css('border-bottom','2px solid ' + rowData.color);                        
                     }
                  }
               }                                       
             },
             {   
               data : 'rate_stts',        
               className : 'sortC',
               render : function(data, type, row, meta)
               {
                  var typeDisplay = '';
                  var typeData = '';
                  
                  var charge    = '<span class="badge bg-danger px-2 py-1 font-13">충전</span>';
                  var attention = '<span class="badge bg-warning px-2 py-1 font-13">관심</span>';
                  var caution   = '<span class="badge bg-success px-2 py-1 font-13">주의</span>';
                  var stability = '<span class="badge bg-info px-2 py-1 font-13">안정</span>';
                  if( data === '충전' ){
                     typeDisplay = charge;
                     typeData    = 1;
                  }
                  else if( data === '관심' ){
                     typeDisplay = attention;
                     typeData    = 2;
                  }
                  else if( data === '주의' ){
                     typeDisplay = caution;
                     typeData    = 3;
                  }
                  else if( data === '안정' ){
                     typeDisplay = stability;
                     typeData    = 4;
                  }      
                  
                  return type === 'display' ? typeDisplay : typeData;            
               },             
             },
             {  
               data : 'batt_stts',        
               className : '',                               
                createdCell: function (td, cellData, rowData, row, col) 
                {
                  $(td).empty().append( set_common_battery_display(rowData) );
               }             
             },
             {   
               data : 'tran_dttm',        
               className : ''                              
             },
             {  
               data : 'current_value',   
               className : 'sortR',                         
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  var b = '';
                  if( cellData ){
                     b += addCommaDBData(cellData);
                     b += '<button class="btn bg-secondary font-white ms-1"><i class="fas fa-plus-circle"></i></button>';                  
                  }
                  $(td).empty().append(b);
                  $(td).find('button').off().on('click', function(){
                     var $target = $('#TNK0001MeterMoreModal');
                     if( rowData.device_id === '' || rowData.serial_no === '' ){
                        alert('정보를 읽어오지 못했습니다.');
                     }
                     else{
                        $target.modal('show');
                        var html  = TNK0001MeterMoreTableHtml();
                        $target.find('thead').empty().append( html );
                        
                        TNK0001MeterMoreDataTable( rowData );
                     }                     
                  });
               }             
             },         
             {  
               data : 'cust_addr',       
               className : ''                              
             },    
              {   
               data : 'last_chg_dt',    
               className : ''                               
             },
             {   
               data : 'chg_cycle',        
               className : 'sortR'                         
             },
             {   
               data : 'd_day',             
               className : 'sortR',                         
               createdCell: function (td, cellData, rowData, row, col) 
               {
                  var w = Number(cellData);
                  if( !cellData || cellData === '' )
                  {
                     $(td).empty();
                  }
                  else if( w >= 0 )
                  {
                     w = String(w);
                     $(td).empty().append( w + '일 경과' );
                     $(td).addClass('font-red');
                  }
                  else if( w < 0 )
                  {
                     w = String(w);
                     $(td).empty().append( w.slice(1) + '일 남음' );
                  }
               }             
             },
             {   
               data : 'dlvy_nm',         
               className : ''                              
             },
             {   
               data : 'cust_trd_cd',     
               className : ''                              
             },
             {   
               data : 'plant_nm',        
               className : ''                              
             },
             {   
               data : 'area_nm',         
               className : ''                              
             },
             {   
               data : 'emp_nm',          
               className : ''                              
             }, 
             {   
               data : 'device_id',       
               className : 'sortH TNK0001HiddenDeviceID'    
             },
             {   
               data : 'comp_id',         
               className : 'sortH TNK0001HiddenCompiD'      
             },
             {   
               data : 'cust_id',         
               className : 'sortH TNK0001MainHiddenCustID'  
             },
           ],
        createdRow: function (row, data, dataIndex) 
        {
         if(dataIndex == 0)
         {
            row.classList.add('row_selected');
            
            TNK0001MakeDetailInfomation(data);
            var active = '';
            var getMenuCookie = getCookie('TNKrememberActive');
            // 만약 쿠키에 탱크 메뉴 쿠키가 있으면( 유효기간 1년 )
            if( getMenuCookie && getMenuCookie !== '' ){
               active = getMenuCookie;
            }
            else{
               active = '1';
            }
            // 해당 탭 활성화
            $('a[href$=TNK0001NAV'+ active +']').addClass('active');
            $('div[id=TNK0001NAV'+ active +']').addClass('active');
            
            window.setTimeout(function(){
               if( active === '1' ){
                   TNK0001MakeChart('7 DAY',data.device_id,data.comp_id);
               }
               else if( active === '2' ){
                  TNK0001HistMaking(data.device_id);
               }
               else if( active === '3' ){
                  TNK0001ChargeMaking(data.device_id,data.comp_id);
               }
            },0);            
         }
         $(row).off().on({
            click : function()
            {
               fn_set_row_selected_remove('tnk_DataTable');
               this.closest('tr').classList.add('row_selected');
               TNK0001MakeDetailInfomation( data );
               
               var active = String($('.nav-pills').find('.active')[0].hash).slice(-1);
               window.setTimeout(function(){
                  if( active === '1' ){
                      TNK0001MakeChart('7 DAY',data.device_id,data.comp_id);
                  }
                  else if( active === '2' ){
                     TNK0001HistMaking(data.device_id);
                  }
                  else if( active === '3' ){
                     TNK0001ChargeMaking(data.device_id,data.comp_id);
                  }
               },0);               
            }
         });
       },
         initComplete : function(data, row) 
         {
   
        },   
       fnDrawCallback : function( oSettings ) 
       {
         /* 페이지네이션 클릭 */
         var $paging = $('#tnk_DataTable_paginate ul li')
         $paging.on({
            click : function()
            {
               fn_set_pagination_click('tnk_DataTable');
            }
         });               
         }        
   });