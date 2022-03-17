---
lang: zh-CN
title: Nginx、Tomato等相关前端配置
description: 服务器的一些相关知识
---

### 服务器知识

记录一下有关前端服务器配置的知识

增加服务器相关技术

### HTML文件设置 过期时间

```html
＜meta http-equiv="expires" content="Wed, 20 Jun 2007 22:33:00 GMT"＞
```


> 此时，过期时间是在 content 设置的，过期后会重新请求，但注意，content时间格式只能是GMT格式

```html
<meta http-equiv="expires" content="0">
```

> 此时，相当于设置永不缓存数据，直接从服务器上取

### Nginx设置文件缓存

```nginx
location ~.*\.(js|css|html|png|jpg)$
{
    expires    3d;
}
```

> expires  3d;　　//表示缓存3天
>
> expires  3h;　　//表示缓存3小时
>
> expires  max;　　//表示缓存10年
>
> expires  -1;　　//表示永远过期。
>
> 如果设置为-1在js、css等静态文件在没有修改的情况下返回的是http 304，如果修改返回http 200
>
> http 304：自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。
>
> http 200：服务器已成功处理了请求，这表示服务器提供了请求的内容。

