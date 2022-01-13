/*
  columns：表头列项，必传，支持多级children
*/
const tableSettings = {
    columns: [{
            prop: 'abstract',
            label: '摘要',
            minWidth: '150',
            verticalAlign: 'top'
        },
        {
            prop: 'subject',
            label: '科目',
            minWidth: '300',
            verticalAlign: 'top'
        },
        {
            label: '借方金额',
            children: [{
                    prop: 'hBillionBow',
                    label: '千',
                    width: '25',
                },
                {
                    prop: 'tBillionBow',
                    label: '百',
                    width: '25',
                },
                {
                    prop: 'billionBow',
                    label: '十',
                    width: '25',
                },
                {
                    prop: 'hMillionBow',
                    label: '亿',
                    width: '25',
                },
                {
                    prop: 'tMillionBow',
                    label: '千',
                    width: '25',
                },
                {
                    prop: 'millionBow',
                    label: '百',
                    width: '25',
                },
                {
                    prop: 'hThousandBow',
                    label: '十',
                    width: '25',
                },
                {
                    prop: 'tThousandBow',
                    label: '万',
                    width: '25',
                },
                {
                    prop: 'thousandBow',
                    label: '千',
                    width: '25',
                },
                {
                    prop: 'hundredBow',
                    label: '百',
                    width: '25',
                },
                {
                    prop: 'tenBow',
                    label: '十',
                    width: '25',
                },
                {
                    prop: 'oneBow',
                    label: '元',
                    width: '25',
                },
                {
                    prop: 'oTenthBow',
                    label: '角',
                    width: '25',
                    border: 'red',
                },
                {
                    prop: 'oPercentBow',
                    label: '分 ',
                    width: '25',
                }
            ]
        },
        {
            label: '贷方金额',
            children: [{
                    prop: 'hBillionLoa',
                    label: '千',
                    width: '25',
                },
                {
                    prop: 'tBillionLoa',
                    label: '百',
                    width: '25',
                },
                {
                    prop: 'billionLoa',
                    label: '十',
                    width: '25',
                },
                {
                    prop: 'hMillionLoa',
                    label: '亿',
                    width: '25',
                },
                {
                    prop: 'tMillionLoa',
                    label: '千',
                    width: '25',
                },
                {
                    prop: 'millionLoa',
                    label: '百',
                    width: '25',
                },
                {
                    prop: 'hThousandLoa',
                    label: '十',
                    width: '25',
                },
                {
                    prop: 'tThousandLoa',
                    label: '万',
                    width: '25',
                },
                {
                    prop: 'thousandLoa',
                    label: '千',
                    width: '25',
                },
                {
                    prop: 'hundredLoa',
                    label: '百',
                    width: '25',
                },
                {
                    prop: 'tenLoa',
                    label: '十',
                    width: '25',
                },
                {
                    prop: 'oneLoa',
                    label: '元',
                    width: '25',
                },
                {
                    prop: 'oTenthLoa',
                    label: '角',
                    width: '25',
                },
                {
                    prop: 'oPercentLoa',
                    label: '分 ',
                    width: '25',
                }
            ]
        },
    ],
}

export default tableSettings