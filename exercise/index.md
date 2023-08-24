### 1. So sánh SSR và CSR:

|                                     SSR                                      |                                       CSR                                       |
| :--------------------------------------------------------------------------: | :-----------------------------------------------------------------------------: |
|                    Server có nhiệm vụ render ra trang web                    |                           Việc render ở client xử lý                            |
| Browser hiển thị nội dung HTML, tiến hành download JS để thực hiện tương tác |   Sau khi đã download và link các file js thì mới hiển thị toàn bộ trang web    |
|            Hiển thị nội dung nhanh chóng trong lần load đầu tiên             | Lần load đầu tiên sẽ tốn nhiều thời gian vì phải download tất cả file cần thiết |
|             Render lại cả trang web mỗi khi thực hiện tương tác              |                     Chỉ render lại những component thay đổi                     |
|                         Gửi nhiều request lên server                         |             Các tương tác thực hiện bằng js nên giảm tải cho server             |
|                                  Tối ưu SEO                                  |                                    SEO giảm                                     |
|               Tương tác với trang web thời gian trả về lâu hơn               |                              Tương tác nhanh chóng                              |

### 2. So sánh MPA và SPA:

|                             MPA                              |                                                                               SPA                                                                                |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                         Dựa trên SSR                         |                                                                           Dựa trên CSR                                                                           |
|    1 application sẽ bao gồm nhiều page liên kết với nhau     |                                                                 Application chỉ bao gồm 1 trang                                                                  |
| Mỗi thao tác/chuyển trang thì đều phải render lại trang web. | Nếu người dùng muốn thực hiện tương tác/chuyển trang thì browser chỉ sẽ phải render 1 phần của trang web, các tính năng tương tác sẽ được xử lý nhanh chóng hơn. |
|                    Không phụ thuộc vào js                    |                                                        Các tính năng, tương tác phụ thuộc chủ yếu vào js                                                         |
|                 BE và FE phụ thuộc vào nhau                  |                                                           BE và FE có thể phát triển độc lập với nhau                                                            |
|   Tối ưu SEO nên phù hợp với các trang thương mại điện tử    |                                  Phù hợp với các trang web nhiều tương tác như các trang mạng xã hội để giảm thời gian loading                                   |

### 3. Các cách import export JS modules

|            Export            |         Import          |
| :--------------------------: | :---------------------: |
|     export default name      |       import name       |
| export { name1, name2, ... } | import { name1, name2 } |
|  export const/function name  |     import { name }     |
|                              |        import \*        |
|                              |    import ... as ...    |
