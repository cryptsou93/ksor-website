"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UserPlus, CheckCircle, AlertCircle } from "lucide-react";

const networkSchema = z.object({
  name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  subject: z.string().min(5, "Le sujet doit comporter au moins 5 caractères"),
  message: z.string().min(20, "Le message doit comporter au moins 20 caractères"),
});

type NetworkFormData = z.infer<typeof networkSchema>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function NetworkForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NetworkFormData>({
    resolver: zodResolver(networkSchema),
  });

  const onSubmit = async (data: NetworkFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "network" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-3">
          Candidature envoyée !
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Merci pour votre intérêt. Notre fondateur examinera votre profil et
          vous contactera dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">
            Nom complet <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            className="input-field"
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email <span className="text-primary">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="votre@email.fr"
            className="input-field"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label">
          Objet <span className="text-primary">*</span>
        </label>
        <input
          id="subject"
          type="text"
          placeholder="Candidature — ingénieur mécanique"
          className="input-field"
          {...register("subject")}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Votre parcours, vos spécialités, les types de missions qui vous intéressent..."
          className="input-field resize-none"
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
          <AlertCircle size={18} />
          Une erreur est survenue. Veuillez réessayer ou nous écrire à contact@ksorindustrie.com
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
            Envoi en cours...
          </>
        ) : (
          <>
            <UserPlus size={20} />
            Envoyer ma candidature →
          </>
        )}
      </button>
    </form>
  );
}
