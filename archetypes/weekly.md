---

{{- $num := int (replace .File.ContentBaseName "weekly_" "") -}}
title: "LifeWeekly #{{$num}} - {{ dateFormat "2006" .Date }}年第 n 周周报"
date: {{ .Date }}
draft: true
categories: ["周报"]
series: ["Weekly Report"]
series_order: {{$num}}
tags: ["weekly"]
summary: "{{ dateFormat "2006" .Date }}年第 n 周周报（总第{{$num}}期），记录本周的见闻与思考"
---

## 💡 观点

## 🎧 所听


## 📚 所看


## 🧠 所想