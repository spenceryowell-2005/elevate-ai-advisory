
import React from "react";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-2xl px-4 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white disabled:opacity-50 " +
        (props.className ?? "")
      }
    />
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-2xl bg-slate-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600 " +
        (props.className ?? "")
      }
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={
        "w-full rounded-2xl bg-slate-900 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-600 " +
        (props.className ?? "")
      }
    />
  );
}
