---
title: "NebulaNovaLifeWeekly #{{ $base := .File.ContentBaseName }}{{ $num := int (replace $base "weekly_" "") }} - {{ dateFormat "2006" .Date }}年第{{ dateFormat "02" .Date }}周周报"
date: {{ .Date }}
draft: true
categories: ["周报"]
series: ["Weekly Report"]
series_order: {{ $num := int (replace .File.ContentBaseName "weekly_" "") }}
tags: ["weekly"]
summary: "{{ dateFormat "2006" .Date }}年第{{ dateFormat "02" .Date }}周周报（总第{{ $num := int (replace .File.ContentBaseName "weekly_" "") }}期），记录本周的见闻与思考"
---

## 本周概览

## 工作记录

## 阅读与学习

## 有趣的发现

## 思考与总结

## 下周计划
