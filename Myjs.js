import React from "react";
import $ from 'jquery';

export default class Myjs  extends React.Component {
    componentDidMount(){       
    // 大首頁共用
    
    // 漢堡
    $(document).ready(function(){   
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
       
          window.fbAsyncInit = function() {     
            window.FB.init({
            appId            : '1662762424018052',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.9'
          });
          window.FB.AppEvents.logPageView();
          };   

        // google搜尋
        var cx = '002254347943719830775:s6buouardhq';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
        $('#search_button_mobile').click(function(){ 
            $('button.gsc-search-button').click(); 
        }); 
              

      console.log('aa');

        $("body").on('keyup','#search',function(){
            if($(this).val()!='') {
                $('#gsc-i-id1').val( $(this).val() );
                $('#search_button,#search_button_mobile').click(function(){ $('button.gsc-search-button').click(); }); 
            }
        });

        $("body").on('keyup','#search_mobile',function(event){
            if( $(this).val()!='' ) {   
                $('#gsc-i-id1').val( $(this).val() );
                $('#search_button_mobile').click(function(){ $('button.gsc-search-button').click(); }); 
                if(event.keyCode==13) {
                    $("#search_mobile").blur();
                }
            }
        });

        
        $(document).on('keyup',function(event) {
            if(event.keyCode==13) {
                $('#gsc-i-id1').val('');
                if( $('#search').val()!='' ) {
                    var searchKey = $('#search').val();                            
                } else {
                    var searchKey = $('#search_mobile').val();
                }
                if( searchKey!='' ) { 
                    $('#gsc-i-id1').val( searchKey );
                    $('button.gsc-search-button').click();
                }
            }
        });
        // google搜尋 ed
        // 手機漢堡執行
            function header_go(){
                $('.nav_inner_m li').each(function(i) {
                    $('.nav_inner_m li a').removeClass('op');
                    $('.nav_inner_m li').find('.nav_sub').hide();
                    $('.nav_inner_m li').eq(i).find('.arraw img').css({transform:'rotate(0deg)'});
                    
                                  
                    $(this).find('a').click(function() {                        
                        $(this).toggleClass('op');
                        if($(this).hasClass('op')){
                                $('.nav_inner_m li').eq(i).find('.arraw img').css({transform:'rotate(180deg)'}); 
                                $('.nav_inner_m li').eq(i).find('.nav_sub').show();                                
                            }else{ 
                                $('.nav_inner_m li').eq(i).find('.arraw img').css({transform:'rotate(0deg)'});                               
                                $('.nav_inner_m li').find('.nav_sub').hide();
                                $(this).removeClass('op');
                            }
                    });

                });
            }
            $('.ham').click(function() {
                header_go();
                $('.ham_close').fadeIn(200);
                $('.nav_inner_m').css({'right':'0'});
                $('.nav_bg').show();

            });
            $('.ham_close').click(function() {
                header_go();          
                $('.nav_inner_m').css({'right':'-100%'});
                $('.nav_bg').hide();
                

            });
           // 手機漢堡執行 ed
           $('.header_search_m .search_btn').click(function() {
                $('.header_search_m .search_page').css({right:0});
                $('.nav_bg').show();            
           });
           $('.header_search_m .search_close_btn').click(function() {
                $('.header_search_m .search_page').css({right:'-100%'});
                $('.nav_bg').hide();            
           });
           
           
           // 手機搜尋框執行

           // 手機搜尋框執行ed

    // 大首頁共用ed

        $(window).scroll(function(){object_scroll(); });
        var header_h=$('.program_header').outerHeight(true);
        var lastScrollTop = 0;
        function object_scroll(){
            if(($(window).scrollTop()>lastScrollTop)){
                if($(window).width()<1024){
                    $('.program_content_community_list_mobile').show();
                }else{
                    $('.program_content_community_list_mobile').hide();
                }
            }else{
                $('.program_content_community_list_mobile').hide();
            }
            lastScrollTop = $(window).scrollTop();
            if($(window).scrollTop()>header_h){
                $('.program_content_updown_page_box').fadeIn(300);
                $('.program_content_community_list').fadeIn(300);
            }else{
                $('.program_content_updown_page_box').hide();
                $('.program_content_community_list').hide();
            }

            if($(window).scrollTop()>50){
                $('#back').fadeIn(300);
            }else{
                $('#back').hide();
            }
        }

        /*gotop*/
        var $el = $(scrollableElement('html', 'body'));
        var speed = 550;
        var $iconTOP = $('#back-img1');
        $($iconTOP).click(function(event) {
            event.preventDefault();
            $el.stop().animate({ scrollTop: -50 }, speed);
        });
        // 透過scrollTop檢測可用元素的函數// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
        function scrollableElement() {
            var i, len, el, $el, scrollable;
            for (i = 0, len = arguments.length; i < len; i++) {
                el = arguments[i];
                $el = $(el);
                if ($el.scrollTop() > 0) {

                    return el;
                } else {
                    $el.scrollTop(1);
                    scrollable = $el.scrollTop() > 0;
                    $el.scrollTop(0);
                    if (scrollable) {
                        return el;
                    }
                }
            }
            return [];
        }
        /*gotop ed*/

        $('.program_content2_main_button li').each(function(i){
            $('.program_content2_main .program_content2_main_button li').eq(i).click(function(){
            $('.program_content2_main .program_content2_main_button li').children('.button01 a').removeClass('active');
            $('.program_content2_main .program_content2_main_button li').eq(i).children('.button01 a').addClass('active');
            
            $('.program_content2_main .program_content2_main_box .program_content_main_information2').css({display:'none'});
            $('.program_content2_main .program_content2_main_box .program_content_main_information2').eq(i).fadeIn(500);
            });
            
            
        });
        
        $('.program_header_nav li').each(function(i){
            $('.program_header_nav li').eq(i).mouseover(function(){
            $('.program_header_nav_child').css({display:'none'});
            $('.program_header_nav li').eq(i).find('.program_header_nav_child').css({display:'block'});
            });
            
            $('.program_header_box').mouseleave(function(){
            $('.program_header_nav_child').css({display:'none'});
            });
        });

        $('.program_header_arraw').click(function(){
            $(this).toggleClass('open1');            
            if($(this).hasClass('open1')){
                $(this).css({transform:'rotate(90deg)',transition:'0.3s'});
                $('.program_header_box_hamburger').slideDown();
                }else{
                    $(this).css({transform:'rotate(0deg)',transition:'0.3s'});
                $('.program_header_box_hamburger').slideUp();
                $('.program_header_box_hamburger1_child').slideUp();
                }
            });
            
            $('.program_header_box_hamburger1 li').each(function(i){
                $('.program_header_box_hamburger1 li').eq(i).click(function(){
            
                $('.program_header_box_hamburger1_child').slideUp();
                $('.program_header_box_hamburger1 li').eq(i).find('.program_header_box_hamburger1_child').slideDown();
                
                });
            });

            /*內頁上下頁控制*/            
            $(".program_content_updown_page_L .program_content_updown_page_arraw").mouseover(function(){$(this).fadeOut(100);$(".program_content_updown_page_L .program_content_updown_page_context_box").fadeIn(100);});
            $(".program_content_updown_page_L .program_content_updown_page_context_box").mouseleave(function(){$(this).fadeOut(100);$(".program_content_updown_page_L .program_content_updown_page_arraw").fadeIn(100);});

            $(".program_content_updown_page_R .program_content_updown_page_arraw").mouseover(function(){$(this).fadeOut(100);$(".program_content_updown_page_R .program_content_updown_page_context_box").fadeIn(100);});
            $(".program_content_updown_page_R .program_content_updown_page_context_box").mouseleave(function(){$(this).fadeOut(100);$(".program_content_updown_page_R .program_content_updown_page_arraw").fadeIn(100);});
            /*內頁上下頁控制 ed*/
        });

      }
    render(){return (
    <div className="myjs">
    </div>)}
}

