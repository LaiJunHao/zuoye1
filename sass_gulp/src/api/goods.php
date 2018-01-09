<?php

    $list = array(

            [

                "id" => 1,
             
                "imgurl" => "sass_gulp/src/images/goods1",

                "text" => "古驰竹韵魅力女士香氛30ml,同时展现出坚强，高雅和温柔",

                "price" => 248.00 
            ],

            [

                "id" => 2,
             
                "imgurl" => "sass_gulp/src/images/goods2",

                "text" => "碧欧泉活泉新润透爽肤水100ml，打通肌肤吸收通道，使肌肤恢复润泽和健康光泽",

                "price" => 49.00 
            ],

            [

                "id" => 3,
             
                "imgurl" => "sass_gulp/src/images/goods3",

                "text" => "贝佳斯强效眼膜60片，即时舒缓眼部周围的幼细皮肤",

                "price" => 128.00 
            ],

            [


                "id" => 3,
             
                "imgurl" => "sass_gulp/src/images/goods3",

                "text" => "贝佳斯强效眼膜60片，即时舒缓眼部周围的幼细皮肤",

                "price" => 128.00 
            ],

            [


                "id" => 4,
             
                "imgurl" => "sass_gulp/src/images/goods4",

                "text" => "维多利亚的秘密保湿身体乳Kiss,能长时间滋润肌肤，萦绕清新的花果香味",

                "price" => 98.00 
            ]
    );

    echo json_encode($list,JSON_UNESCAPED_UNICODE);
?>